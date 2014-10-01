#!/usr/bin/env python

import config
import os
import subprocess
from lib.bottle import route, run, static_file

curr_dir = os.path.dirname(os.path.realpath(__file__))

@route("/api/1/repos")
def repos():
    return static_file("repos.json", root=config.data_dir)

@route("/api/1/repos/<repo>/commits")
def logs(repo):
    return static_file("commits_" + repo + ".json", root=config.data_dir)

@route("/api/1/reload")
def reload():
    return subprocess.call([curr_dir + "/shell/generate-data", curr_dir + "/config.py"])

run(host="0.0.0.0", port=8123)
