# This configuration file needs to be valid in both Python and Bash

# The path to the repository on which all git operations wil be performed.
# GitManager will use the remotes in this repository to generate reports.
repo_dir="/path/to/repo"

# The repository and branch against which every remote's head will be compared.
# "prod_repo" needs to be configured as remote in the "repo_dir" repository.
prod_repo="production"
prod_branch="master"

# Path where the reports will be stored
data_dir="/path/to/data"
