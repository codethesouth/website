import FTP from ftplib
import os

####################################################
#                   Server Info                    #
####################################################
server = "199.231.231.221"
port = "22"
username = os.environ( "CTSWEBSITE_USERNAME" )
password = os.environ( "CTSWEBSITE_PASSWORD" )

# username="$CTSWEBSITE_USERNAME"
# password="$CTSWEBSITE_PASSWORD"

####################################################
#                FTP Connection                    #
####################################################
def connect():
    # Connect to the server
    ftp = FTP()
    ftp.connect( server, port )
    ftp.login( username, password )
    return ftp

####################################################
#   Upload All Files From The Currrent Directory   #
####################################################
def upload_current_directory( session ):
    # Get the current working directory
    path = os.getcwd()

    # Get all files/folders in the current directory
    files = os.listdir( path )
    os.chdir( path )

    # Upload the files for the current directory
    for file in files:
        if os.path.isfile( path + r'\{}'.format( file ) ):
            fh = open( file, "rb" )
            session.storbinary( 'STOR %s' % file, fh )
            fh.close()
        elif os.path.isdir(path + r'\{}'.format( file ) ):
            session.mkd( file )
            session.cwd( file )
            uploadThis( path + r'\{}'.format( file) )
    session.cwd( ".." )
    os.chdir( ".." )

####################################################
#      Connect to Server & Upload All Files        #
####################################################
session = connect()
upload_current_directory( session )