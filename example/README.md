#Example Prototype
<b>The instructions below are used for video recording reasons and are not used within the ciriculmn or being graded by the instructors.</b>

In this example we are going to walk through the process of working on a new prototype and the set of instructions that go with it.

## Code Setup

##### 1. Fork Repository
> Forking the repoistory or Repo will give you a copy of this repo under your own user account. We will be starting with a Learning-Fuze account repo.

> <img src="need-fork-screenshot" width="600" />

#####2. Cloning the Repo - Copy locally
> `git clone https://github.com/[your-user-name]/prototypes.git`

> <b>[your-user-name] should be replaced with your exact github account name</b>

> Cloning a repository is taking the copy that was forked on github.com/[your_account_name/prototypes (in the step above) and saving it too your computer (Local Machine).

#####3. Create a feature grouping - Create feature branch

> `git checkout -b feature-1

> Creating feature groupings allow users to modify code without causing issues with the current functioning code. 
> *Any modifications to these files after <b>branching</b> can be undone*

## Coding Instructions (scope)

##### HTML Basics
> 1. Create an html file inside the example folder
>   1. Insert the basic HTML structure tags (html,head,body)
> 1. Add a header and h1 tag with the text "This is a test header"
> 1. Add 5 content sections inside the appropriate paragraph tags.
>   1. Inside the content sections add Lorem Ipsum text from here (http://www.lipsum.com/feed/html) <a href="http://www.lipsum.com" target="_blank">What is Lorem Ipsum</a>

##### Basic Styling
> 1. Make the font size of the h1 tag equal to 28 pixels
> 1. Add a class "test-class" to the content tags
> 1. Italicize the font of the first paragraph tag

## After Coding
##### 1. Save files to Git - Add all modified & created files 
> `git add .`

> Saving files to Git allows those files to be grouped together by a message (commit)

##### 2. Group all saved git files with a commit message
> `git commit -m "Example Prototype - EJ020586"`

> Grouping files with a message allows those changes to be seen by others a referenced for specific states of code

##### 3. Allow others to see your modifications
> `git push origin feature-1`

> When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>) to the feature branch/group <b>prototype-1</b>

##### 4. See if your feature fits with what everyone else was working on - Pull Request

> <img src="need-screen-shot-pr" width="650" /> 

##### 5. Watch perfect prototype

> <img src="prefect-prototype-image-and-video-link" width="650" /> 

##### 6. Collaborate on feedback 

> Within the gihub.com UI another develolper or in this case an instrutor will review the Pull Request you made - <b>Is your feature working</b>. Collaboration happens through github UI & the noticiations are sent through email when comments are added to pull requests

> <img src="collaboration-image" width="650" />

> + Make additional modification based on feedback
>   + more commits to the same branch

##### 7. Pull Request Closed
> + Pull request assignee Merges and Closes Pull Request through github UI.

> *<b>Common Issues</b>*

> + Code can't be automatically merged
>   + Needs manual merge