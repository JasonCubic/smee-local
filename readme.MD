A simple container to use smee-io with a jenkins install running on localhost.

Set the environmental variable SMEE_TARGET to your jenkins localhost url

for the SMEE_SOURCE env variable you can either:
* leave it blank in which case a new smee channel will be created.  Check the docker logs for the container to see the URL.
* or goto smee.io and create a channel and set the SMEE_SOURCE env variable to it.
