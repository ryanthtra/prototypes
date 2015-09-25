# Prototype - HTML Links, Images &amp; Lists  

Expand your HTML knowledge with better understanding of using links, adding images and creating lists. As you work through this
prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon). This prototype is based
on the information that you obtained through the following resources (<b>If you haven't gone through these then please do so now</b>).

- Readings
    - HTML Links - <a href="http://www.w3schools.com/html/html_links.asp" target="_blank">Link</a>
    - HTML Images - <a href="http://www.w3schools.com/html/html_images.asp" target="_blank">Link</a>
    - HTML Lists - <a href="http://www.w3schools.com/html/html_lists.asp" target="_blank">Link</a>
- Presentations
    - HTML Links, Images &amp; Lists 
        - <a href="https://www.youtube.com/watch?v=w8robcf8-GY" target="_blank">Video Link</a>
        - <a href="https://drive.google.com/drive/u/0/folders/0B6mn1BHjNxTgVTVuNzdLMVNYRGs" target="_blank">Slides Link</a>

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

> `git checkout -b html_fundamentals_4`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "html_fundamentals_4" is the branch name.

## Coding Instructions

### Feature Set 1 - Creating Structure & Content
This is intentionally similar to the previous prototype to reinforce comprehension of fundamental material
> 1. Start using the file "index.html" provided in the same folder as this readme
> 1. Create a basic HTML Skeleton, including
>   - doctype
>   - html
>   - head
>   - body
> 1. In the head link the included `style.css` stylesheet
> 1. Make an overall heading for the page. Something that describes the intent. ex. [Firstname Lastname]
> 1. Make a Heading & paragraph for each of the following sections
> 	1. About Me
>       1. Heading - About Me
> 		1. Paragraph - Description about yourself

### Feature Set 2 - Head Elements
This is intentionally similar to the previous prototype to reinforce comprehension of fundamental material
> ##### Within the head tags

> 1. Add 3 meta tags
>   1. description  
>   1. keywords  
>   1. author
> 1. Add a title with the text: **My Portfolio - Home**
> 1. Add an external google font 
>   1. `<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>`
>   1. to be utilized in feature set 7: `font-family: 'Montserrat', sans-serif;` 
> 1. Create style tags
>   1. Add link to the provided external stylesheet:
>   1. `style.css`


### Feature Set 3 - Adding Additional Pages
This is intentionally similar to the previous prototype to reinforce comprehension of fundamental material
> 1. In the `skills.html` file provided
> 1. Create a basic HTML skeleton
> 1. Copy the head section from your `index.html` file
>   1. Change the title to: **My Portfolio - Skills**
>      1. Change any other relative data in the head section to fit your skills page
>     1. Add a `<h1>` header at the top of your page that fits your skills page
> 1. Create a new file in the html_fundamentals_4 folder
>   1. Name the file `experience.html`
>   1. Create a basic HTML skeleton
>   1. Copy the head section from your `index.html` file
>       1. Change the title to: **My Portfolio - Experience**
>       1. Change any other relative data in the head section to fit your experience page
>   1. Add a `<h1>` header at the top of your page that fits your experience page

### Feature Set 4 - Creating Navigation
**On all three pages do the following**

> 1. Add an unordered list under your main heading on each page
>   1. give the list a class of `nav`
>   1. Add the following items to the list
>       - home
>       - skills
>       - Experience
>   1. Each list item should be wrapped in an `<a>` tag to create a link to its corresponding page
>       - Example: `<li><a href="index.html">Home</a></li>`


### Feature set 5 - Adding an Image
> 1. Find or take a picture of yourself
> 1. Add the picture into the `images` folder
> 1. On your `index.html` page
>    1. Add an `<img>` tag to the page between your "About Me" header and your "description" paragraph
>    1. Have the `<img>` tag link to your image in the images folder

### Feature set 6 - Adding content
> ##### On the skills page

>>  1. Create a nested list with these three sections
>>      1. Technical skills
>>          - Example: HTML, CSS, JavaScript, etc...
>>      1. Technical tools
>>          - Example: phpStorm, git, GitHub, etc...
>>      1. Soft Skills
>>          - Example: Speak 5 languages, Management experience, Sales Experience, etc...
>>  1. Give the list an ID of `skills-list'
>>  1. You should list at least 9 skills (3 per section)

> ##### On the Experience page 

>>  1. Create another nested list with at least three past jobs
>>  1. Example:
>>      1. Name of place worked
>>          1. Job title
>>          1. How long or dates you worked there
>>          1. Job duties / responsibilities
>>  1. Give the list an ID of `experience-list`

> ##### Example nested list

>>  ```HTML
>>  <ol id=skills-list>
>>      <li>Technical Skills</li>
>>      <ul>
>>          <li>HTML</li>
>>          <li>CSS</li>
>>      </ul>
>>      <li>Technical Tools</li>
>>      <ul>
>>          <li>phpStorm</li>
>>  ```

> **The example is not complete, it is up to you to finish it and add your information**

### Feature Set 7 - Adding Styling
This is intentionally similar to the previous prototype to reinforce comprehension of fundamental material
> **Inside your `style.css` file**

> ##### For the home page (index.html)

>>  1. Make the about me paragraph font size equal to 12px
>>  1. Change the About Me header text to be your favorite color
>>  1. Center all content on the page
>>  1. Give your image a set height
>>  1. Using float, float your image to the left or right
>>      1. Example: `float: left;`

> ##### For the Experience page

>>  1. Add the google font family to the Experience header
>>  1. Add a background color of your choosing to the experience section (not white)
>>  1. Change the bullets or numbers on your experience list to something other than the default

> ##### For the skill page

>>  1. Add the google font family to the Skill header
>>  1. Change the text color of your nested list items
>>      1. Only change the inner list items - Your actual skills

> ##### For the `nav` list on all pages

>>  1. Remove the bullets
>>  1. Make the items listed horizontally as opposed to vertically
>>      1. Try using the display property
>>  1. Add some margin to space the list items out
>>  1. Increase the font size of the list items

> ##### All of this should be done from your `style.css` file

>>  1. **DO NOT** use inline styles
>>  1. **DO NOT** use multiple style sheets, you only need one
>>  1. **DO** Use classes and IDs to help target certain elements

## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "html_fundamentals_4 - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin html_fundamentals_4`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature branch/group <b>html_fundamentals_4</b>

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
>> 1. `compare: html_fundamentals_4`
>>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>>   1. This will usually be the same as the name of the prototype
>> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
>> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>html_fundamentals_4 - [you name first & last name]</b> already pre populated in the Title field
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
