# Setting up SSH keys for multiple git account

## Generating keys - [ssh-keygen](https://www.ssh.com/ssh/keygen/)

```shell script
git-keygen -t rsa -C "user1" -f "user1"
git-keygen -f "id_rsa_github" -t rsa -b 4096 -C "email"
git-keygen -f "id_rsa_bitbucket" -t rsa -b 4096 -C "email"
```


## Add generated SSH private keys  - [ssh-add](https://www.ssh.com/ssh/add) 

```shell script
-- Check existing keys
ssh-add -l
-- Run git agent
eval "$(ssh-agent -s)"

-- Remove all keys
sssh-add -D

-- Add the pass phrase to each git key to keychain: (option -k loads plain private keys only, skips certificates)
ssh-add  -K  ~/.git/id_rsa_github
ssh-add  -K  ~/.ssh/id_rsa_bitbucket

```

## Verify Keys

```shell script

ssh-add -l


--Check that you are connecting to the correct server
ssh -vT git@github.com
ssh -vT username@github.com

```

## Add generated SSH public keys to Github / Bitbucket

```shell script
pbcopy < ~/.git/id_rsa_github
```


## git config local & global username & email

```shell script
git config user.name "name"
git config user.email "email"

git config --global user.name "nayakam"
git config --global user.email "thillakan@yahoo.com.au"

```


## Add to SSH config

```shell script
# ----------------------------
Host github
	HostName github.com
	User username
	PreferredAuthentications publickey
	IdentityFile private_key_file
	UseKeychain yes
	AddKeysToAgent yes
# ----------------------------
Host bitbucket
	HostName bitbucket.org
	User username
	PreferredAuthentications publickey
	IdentityFile private_key_file
	UseKeychain yes
	AddKeysToAgent yes
# ----------------------------
```
 
 # Reference 
 *  https://linuxize.com/post/using-the-ssh-config-file/
 *  https://gist.github.com/jexchan/2351996
 
 
 