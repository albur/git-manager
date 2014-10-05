#!/usr/bin/env python

import bottle
import config
import os
import subprocess
from bottle import response, route, static_file

curr_dir = os.path.dirname(os.path.realpath(__file__))
shell_dir = curr_dir + "/../shell"

@route("/")
def index():
    return static_file("README.md", root=curr_dir + "/../..", mimetype="text/plain")

@route("/api/1/repos")
def repos():
    return static_file("repos.json", root=config.data_dir, mimetype="application/json")

@route("/api/1/repos/<repo>/commits")
def logs(repo):
    return static_file("commits_" + repo + ".json", root=config.data_dir, mimetype="application/json")

@route("/api/1/reload")
def reload():
    response.content_type = "application/json; charset=UTF8"
    result = subprocess.call([shell_dir + "/generate-data", curr_dir + "/config.py"])
    return '{ "result": ' + str(result) + ' }'

bottle.run(host='0.0.0.0', port=8123, server='cherrypy')
