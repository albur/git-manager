#!/usr/bin/env python

import config
import os
import subprocess
from lib.bottle import route, run, static_file

curr_dir = os.path.dirname(os.path.realpath(__file__))

@route("/api/1/repo/<info>")
def repo(info):
    return static_file(info + ".json", root=config.repo_info_dir)

@route("/api/1/heads/<remote>")
def heads(remote):
    return static_file(remote + ".json", root=config.heads_dir)

@route("/api/1/logs/<remote>")
def logs(remote):
    return static_file(remote + ".json", root=config.logs_dir)

@route("/api/1/reload")
def reload():
    return subprocess.call([curr_dir + "/shell/generate-data", curr_dir + "/config.py"])

run(host="localhost", port=8123)
