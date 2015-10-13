# HTML & CSS - Responsive Design

##Dev Tools Instruction - This is important
   - Using dev tools to see mobile views in the browser - <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_css_responsive/README.md" target="_blank">Reference Link</a>

## Subject Resources
- Presentation
    -  HTML & CSS Responsive and Mobile First - <a href="https://www.youtube.com/watch?v=aZbTiZg_i1U" target="_blank">Video Link</a>
- Readings
    - HTML & CSS: Responsive & Mobile First - <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDubE1qWDRZSVJXcWM/view?usp=sharing" target="_blank">Link</a>
    - w3schools: HTML Responsive - <a href="http://www.w3schools.com/html/html_responsive.asp" target="_blank">Link</a>

## Code Setup Details

#####1. Open PHPStorm

#####2. Navigate to prototypes

> Insert this command in the terminal tab

> `cd prototypes` & press enter

> - this changes the directory to the prototypes folder
> - If you get an error with the above command its probably because you are already within the correct directory

#####3. Create a feature grouping (*Create feature branch*)

> Insert & execute these command in the terminal tab individually

> `git checkout master` & press enter
> - The command above switches to the default branch

> `git pull https://github.com/Learning-Fuze/prototypes.git` & press enter
> - The command above downloads the newly posted prototypes and saves them to your local machine

> `git checkout -b html_css_responsive`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "html_css_responsive" is the branch name.

## Coding Instructions

### Feature Set 1 - Basic responsive layout
####  Create index.html
##### Include:
> - A graphic that is 50% of its available size - minimum 75px
> - Float the graphic left
> - 2 paragraphs containing <a href="http://www.lipsum.com/" target="_blank">lorem ipsum</a>
> - Ensure that fonts are responsive to the page and scale as necessary
>

### Feature Set 2 - Responsive form
> - Make form2.html responsive

#### Create responsive.html

> - copy and paste the code from form2.html that you previously created in the <a href="https://github.com/Learning-Fuze/prototypes/tree/master/html_forms" target="_blank">html forms prototype</a>
> 
#### Media queries
> 
##### At the iphone6 screen width (375px)
>
Your form should do the following:
>
> 1. inputs should be in a single column 
> 1. inputs should be nearly full width, with some side gutters
> 1. Should be adaptable between desktop and mobile
>
### Example images
> 
form3 in desktop view should look like:
<img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_forms/form3.png" alt="Form 3 layout">
>
form3 should look like the following at the iphone6 width and height:
> #### iphone6 devtools view:
  - Using dev tools to see mobile views in the browser - <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_css_responsive/README.md" target="_blank">Reference Link</a>
> <img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_css_responsive/iphone6_responsive.png">
>
> #### close up: 
> <img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_css_responsive/form3_responsive.png">
## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "html_css_responsive - Your Name"`
> - Your Name should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin html_css_responsive`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature branch/group <b>html_css_responsive</b>

##### 4. See if your feature fits with what everyone else was working on (Pull Request)

> ####Step 4.1 Open your prototypes Repo in the browser
> - The link Should follow this format github.com / [your user name] / prototypes

> ####Step 4.2 Click Pull request tab to open the pull request list

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" width="350"/></a>

> ####Step 4.3 Click "New Pull request" button

> <a href="https://github.com/Learning-Fuze/prototypes/blo b/assets/assets/example/2.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/2.jpg?raw=true" width="800" /></a>

> ####Step 4.4 Comparing Changes
> During this step there are a hand full of highlighted things that need to be taken into consideration.

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" width="800" /></a>

>> 1. `base fork: Learning-Fuze/prototypes`
>>   1. For all prototypes this will always remain the same
>> 1. `base: C#_userName`
>>   1. Here you will select the option that matches your username
>>   1. If you can not locate an option that has your username, contact an instructor
>> 1. `head fork: [your_user_name]/prototypes`
>>   1. Here you will select the option that matches your username / prototypes
>>   1. If you can not locate an option that has your username / prototypes, contact an instructor
>> 1. `compare: html_css_responsive`
>>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>>   1. This will usually be the same as the name of the prototype
>> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
>> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>html_css_responsive - [you name first & last name]</b> already pre populated in the Title field
> 1. <b>Don't assign a user.</b> (An Instructor will select who this gets assigned too)
>   1. Further into the cohort we will have students learn to review pull requests
> 1. Click on "Create pull Request"

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" width="800" /></a>

> ---

##### 5. Collaborate on feedback

> Within the Github.com UI another developer or in this case an instructor will review the Pull Request you made - <b>Is your feature working</b>. Collaboration happens through github UI & the notifications are sent through email when comments are added to pull requests

> - Students should make modifications to there code based on the instructors feedback
> - Instructors will be giving an initial assessment based on the pull request. <b>Any additional collaboration after the instructor has been feedback will be on a requested basis only.</b>

##### 6. Pull Request Closed
> - In the LearningFuze workflow the pull requests are closed to indicate assessment has been given to the student and recorded.
