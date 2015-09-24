# HTML - Elements, Attributes, and comments

> <h4>Purpose</h4>

>> - To teach you basic html element construction

> <h4>Project Tie-In</h4> 

>> - Portfolio v1.0

> <h4>Project Topics</h4> 

>> - HTML Elements: basic layout and formatting elements
>> - HTML Attributes: intro to attributes for future use

## Overview - How to complete the Prototype

> <h4>Code Setup - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/html_fundamentals_1#code-setup-details">Details</a></h4>
>> 1. Open PhpStorm
>> 1. Fork Repository
>> 1. Copy locally (Clone the Repo)
>> 1. Create a feature grouping (Create feature branch)

> <h4>Coding Instructions (Scope) - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/html_fundamentals_1#coding-instructions-scope-details">Details</a></h4>
>> 1. <a href="https://github.com/Learning-Fuze/prototypes/tree/master/html_fundamentals_1#prototype-1">Prototype 1</a>
>> 1. <a href="https://github.com/Learning-Fuze/prototypes/tree/master/html_fundamentals_1#prototype-2">Prototype 2</a>
>> 1. <a href="https://github.com/Learning-Fuze/prototypes/tree/master/html_fundamentals_1#prototype-3">Prototype 3</a>
>> 1. <a href="https://github.com/Learning-Fuze/prototypes/tree/master/html_fundamentals_1#prototype-4">Prototype 4</a>

> <h4>After Coding - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/html_fundamentals_1#after-coding-details">Details</a></h4>
>> 1. Save files to Git
>> 1. Package (group) all saved git files with a commit message
>> 1. Allow others to see your changes by uploading them to the Github website
>> 1. See if your feature fits with what everyone else was working on (Pull Request)
>> 1. Watch perfect prototype
>> 1. Collaborate on feedback
>> 1. Pull Request Closed

## Code Setup Details

##### 1. Fork Repository
> Forking the repository or Repo will give you a copy of this repo under your own GitHub user account. We will be starting with a Learning-Fuze account repo.

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/6.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/6.jpg?raw=true" width="800" /></a>

#####2. Copy locally (Clone the Repo)
> `git clone https://github.com/[your-user-name]/prototypes.git`

> <b>[your-user-name] should be replaced with your exact github account name</b>

> Cloning a repository is making a copy of the repo that was forked on github.com/[your_account_name]/prototypes (in the step above) and saving it too your computer (Local Machine).

#####3. Create a feature grouping (Create feature branch)

> `cd prototypes` - change the directory to the prototypes folder that was just copied

> `git checkout -b html_fundamentals_1`

> Creating feature groupings allow users to modify code without causing issues with the current functioning code. 
> *Any modifications to these files after <b>branching</b> can be undone*
> *"html_fundamentals_1" is the branch name.*


## Coding Instructions (Scope) Details

### Prototype 1 

> 1. In PHP Storm
>>	1. Expand the lfz folder, if you haven't already <br><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_fundamentals_1/1.png?raw=true" width="250px"><br><br>
>>	1. Go into your prototypes directory, then into your html_fundamentals_1 folder
>>	1. right click on the html_fundamentals_1 folder, click on "new", then on "file" <br><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_fundamentals_1/2.png?raw=true" width="250px"><br><br>
>>	1. Enter the name of the file: "index.html" without the quote marks <br><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_fundamentals_1/3.png?raw=true" width="250px"><br><br>
>>	1. Press OK

> 1. Create a basic HTML Skeleton, including
>>	- doctype
>>	- html
>>	- head
>>	- body

> 1. Inside the body tags, type the words "Hello World"
> 1. Test your output.
>>	1. Open a browser
>>	1. In the URL (not search bar) type "localhost:8888/lfz".  If your MAMP port is not 8888, enter the port appropriate for your system
>>	1. Navigate through the displayed links to get to your prototypes/html_fundamentals_1 folder
>>	1. Your index page will now display.
>>	1. **It will be blank** 

> 1. Add content
>>	1. In PHP Storm:
>>		- between the &lt;body&gt; and &lt;/body&gt; tags, add "Hello, I am [your name]" 
>>			- don't put the quotes
>>			- replace the [your name] with your name, without the brackets

> 1. Check your code
>>	- In Chrome
>>		- Refresh the page
>>		- See if your message appears <br><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_fundamentals_1/5.png?raw=true" width="250px"><br>
		
### Prototype 2

>1. Surround your "Hello, I am [your name]" text with &lt;h1&gt;  and &lt;/h1&gt;
>1. Add a paragraph tag, and fill it with a short description about your past career.  Don't forget the close p tag!
>1. Add a second paragraph tag, and fill it with a short description of what you want to do with your LearningFuze education.
>1. In the second paragraph, after the text you entered above, 
>>	1. nest an h3 tag inside the paragraph.  The h3 tag should be the **child** of the p tag, after the text
>>		1. please note that we do not normally nest headers in paragraphs
>>	1. Add the text "Experience" to your h3 tag
>>	1. After the h3 close tag, add a break tag.  The p tag should be the **parent** of the h3 and br tag  
>>	1. Add the text "Todo: fill in skills"

>1. In the h3 tag, add a title **attribute**.  title will be the **key**, and add "This is an example title" as the **value**

### Prototype 3

> 1. Create a new h3 tag, after the existing code.  Give it the text of "Skills"
> 1. Add 5 skills that you have, each inside its own paragraph.

### Prototype 4

>1. Create comments before each of your paragraphs, describing the purpose of that paragraph that immediately follows.

### *Hints*

> 1. Test your code frequently, don't wait till you're done to test your code
> 1. Always have your console open while testing your code
> 1. Save and push to gitHub often
>>	1. Save as often as you can it's simple, quick and will save you a lot of headache
>>	1. Push to gitHub after each playground is successfully created (at least)
>>	1. Remember to push to your `html_fundamentals_1` branch

> 1. Don't forget to ask for help if you get stuck

## After Coding Details
##### 1. Save files to Git - Add all modified & created files 
> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message
> `git commit -m "html_fundamentals_1 - Your Name"`
>	- Replace "Your Name" with your first and last name
> 	- Grouping files with a message allows those changes to be seen by others and referenced for specific states of code

##### 3. Allow others to see your changes by uploading them to the Github website
> `git push origin html_fundamentals_1`

> When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature branch/group <b>html_fundamentals_1</b>

##### 4. See if your feature fits with what everyone else was working on (Pull Request)

> ####Step 1. Click Pull request tab to open the pull request list

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" width="350"/></a>

> ---

> ####Step 2. Click "New Pull request" button

> <a href="https://github.com/Learning-Fuze/prototypes/blo b/assets/assets/example/2.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/2.jpg?raw=true" width="800" /></a>

> ---

> ####Step 3. Select the <b>feature-1</b> branch from the drop down

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/3.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/3.jpg?raw=true" width="800" /></a>

> ---

> ####Step 4. Comparing Changes
> During this step there are a hand full of highlighted things that need to be taken into consideration.

> 1. Click the compare across forks link (pictured below)

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/7.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/7.jpg?raw=true" width="800" /></a>

> 1. `base fork: Learning-Fuze/prototypes`
>   1. For all prototypes this will always remain the same
> 1. `base: C#_userName`
>   1. Here you will select the option that matches your username
>   1. If you can not locate an option that has your username, contact an instructor
> 1. `head fork: scbowler/prototypes-1`
>   1. Here you will select the option that matches your username / prototypes
>   1. If you can not locate an option that has your username / prototypes, contact an instructor
> 1. `compare: feature-1`
>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>		- For this prototype it is `html_fundamentals_1`
>   1. This will usually be the same as the name of the prototype
> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image below)

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" width="800" /></a>

> ---

> ####Step 5. Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   - Title the pull request with the name of the prototype followed by your first and last name
>       - <b>Example:</b> html_fundamentals_1 - Your Name
			- Replace "Your Name" with your first and last name
> 1. <b>Don't assign a user.</b> (An Instructor will select who this gets assigned too)
>   - Further into the cohort we will have students learn to review pull requests
> 1. Click on "Create pull Request"

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" width="800" /></a>

> ---

##### 5. Watch perfect prototype

> - A perfect prototype will come in the form of either code, a video or both
> - The perfect prototype will be available shortly after you have submitted this prototype

##### 6. Collaborate on feedback 

> Within the Github.com UI another developer or in this case an instructor will review the Pull Request you made - <b>Is your feature working</b>. Collaboration happens through github UI & the notifications are sent through email when comments are added to pull requests

> - Make additional modification based on feedback
>   - more commits to the same branch

##### 7. Pull Request Closed

> - Pull request assignee Merges and Closes Pull Request through Github.com UI.

> *<b>Common Issues</b>*

> - Code can't be automatically merged
>   - Needs manual merge
