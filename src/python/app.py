#!/usr/bin/env python

import bottle
import config
import json
import os
import subprocess
from bottle import post, request, response, route, static_file

curr_dir = os.path.dirname(os.path.realpath(__file__))
shell_dir = curr_dir + "/../shell"
public_dir = curr_dir + "/../frontend/public"

@route("/api/1/repos")
def repos():
    return static_file("repos.json", root=config.data_dir, mimetype="application/json")

@route("/api/1/repos/<repo>/commits")
def logs(repo):
    return static_file("commits_" + repo + ".json", root=config.data_dir, mimetype="application/json")

@route("/api/1/repos/<repo>/info")
def logs(repo):
    return static_file("info_" + repo + ".json", root=config.data_dir, mimetype="application/json")

@post("/api/1/repos/<repo>/info")
def logs(repo):
    response.content_type = "application/json; charset=UTF8"
    with open(config.data_dir + "/info_" + repo + ".json", "w") as f:
        f.write(json.dumps(request.json))
    return '{ "result": "0" }';

@route("/api/1/reload")
def reload():
    response.content_type = "application/json; charset=UTF8"
    result = subprocess.call([shell_dir + "/generate-data", curr_dir + "/config.py"])
    return '{ "result": ' + str(result) + ' }'

@route("/")
@route("/repo/<repo>")
def index(repo = ""):
    return public("index.html")

@route("/<filepath:path>")
def public(filepath):
    return static_file(filepath, root=public_dir)

bottle.run(host='0.0.0.0', port=8123, server='cherrypy')
