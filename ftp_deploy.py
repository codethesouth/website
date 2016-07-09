import pysftp
import os

####################################################
#                   Server Info                    #
####################################################
server = "199.231.231.221"
username = os.environ.get( "CTSWEBSITE_USERNAME" )
password = os.environ.get( "CTSWEBSITE_PASSWORD" )

####################################################
#                FTP Connection                    #
####################################################

# Connect to the server
print "Starting SFTP Connection"
sftp = pysftp.Connection( server, username=username, password=password )

# Upload files to the server
files = [ "bower.json", "favicon.ico", "Gruntfile.js", "package.json", "robots.txt", "server.js" ]
folders = [ "bin", "obj", "public", "routes", "views"]

print "Starting copy of the current directory"

for file in files:
    print "Copying the file: " + file
    sftp.put( file, preserve_mtime=True )

for folder in folders:
    print "Copying the folder: " + folder
    if sftp.exists( folder ) == False:
        sftp.mkdir( folder )

    folder = folder + "/"
    sftp.put_r( folder, folder, preserve_mtime=True )