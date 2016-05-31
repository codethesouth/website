from ftplib import FTP
import os

####################################################
#                   Server Info                    #
####################################################
server = "199.231.231.221"
port = "22"
username = os.environ.get( "CTSWEBSITE_USERNAME" )
password = os.environ.get( "CTSWEBSITE_PASSWORD" )

# username="$CTSWEBSITE_USERNAME"
# password="$CTSWEBSITE_PASSWORD"

####################################################
#                FTP Connection                    #
####################################################
def connect():
    # Connect to the server
    print "Starting FTP Connection"
    ftp = FTP()
    ftp.connect( server, port )
    ftp.login( username, password )
    return ftp

####################################################
#   Upload All Files From The Currrent Directory   #
####################################################
def upload_current_directory( session ):
    # Get the current working directory
    print "Getting current working directory"
    path = os.getcwd()

    # Get all files/folders in the current directory
    print "Getting all files/folders in the current directory"
    files = os.listdir( path )
    os.chdir( path )

    # Upload the files for the current directory
    print "List of files:"
    for file in files:
        print file
        if os.path.isfile( path + r'\{}'.format( file ) ):
            fh = open( file, "rb" )
            session.storbinary( 'STOR %s' % file, fh )
            fh.close()
        elif os.path.isdir(path + r'\{}'.format( file ) ):
            session.mkd( file )
            session.cwd( file )
            upload_current_directory( path + r'\{}'.format( file ) )
    session.cwd( ".." )
    os.chdir( ".." )
    print "Completed file/folder upload"
    return

####################################################
#      Connect to Server & Upload All Files        #
####################################################
session = connect()
upload_current_directory( session )