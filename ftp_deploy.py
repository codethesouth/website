import pysftp
import os

####################################################
#                   Server Info                    #
####################################################
server = "199.231.231.221"
username = os.environ.get( "CTSWEBSITE_USERNAME" )
password = os.environ.get( "CTSWEBSITE_PASSWORD" )

# username="$CTSWEBSITE_USERNAME"
# password="$CTSWEBSITE_PASSWORD"

####################################################
#                FTP Connection                    #
####################################################

# Connect to the server
print "Starting SFTP Connection"
sftp = pysftp.Connection( server, username=username, password=password )

# Upload files to the server
print "Starting recursive copy of files"
path = os.getcwd()
sftp.put_r( "./", 'test', preserve_mtime=True)
# except:
# print "Failed to copy file(s) to the server"