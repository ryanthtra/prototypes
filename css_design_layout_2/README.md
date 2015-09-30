# Prototype - CSS Design & Layout 2 <br> CSS Positioning and CSS Floating

Expanding on your understanding of CSS layouts and how they pertain to web page design. This prototype 
is based on the information that you obtained through the following resources (<b>If you haven't gone through these 
then please do so now</b>).

- Readings
    - CSS Positioning - <a href="http://www.w3schools.com/css/css_positioning.asp" target="_blank">Link</a>
    - CSS Floating - <a href="http://www.w3schools.com/css/css_float.asp" target="_blank">Link</a>
- Presentations
    - CSS Design & Layout 2
        - <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuOGVTZXpHOWtrNGM/view" target="_blank">Slides Link</a>
        - <a href="https://www.youtube.com/watch?v=cOAHWiAxgoI" target="_blank">Video Link (covers both)</a>
- Projects
    - This project will help build towards the MBoutique projects

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

> `git checkout -b css_design_layout_2`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "css_design_layout_2" is the branch name.

## Coding Instructions

### Feature Set 1 - Header with a UL Nav

> ##### Make a file called index.html
  
>   1. add an internal CSS stylesheet
    1. in it, do the following
    1. Using the `<header>` tag, create a container for your header
        1. Set its width to be the full width of the page
        1. Set its height to 15%-20% of the view area's height
        1. Add a background color of your choosing
    1. Go to google and find a logo that you like, try to find an image that is file type `.png`
        1. Create a new folder/directory inside your `css_design_layout_2` folder named `images`
        1. Save your logo that you found on google into your newly created images folder
        1. Add an image tag inside your header container that points to your logo image
        1. Using CSS
            1. Move the image to the left side of your header (leave some space between the image and the left edge of
             the header)
            1. Size the image so it fits in your header neatly
            1. Vertically center the image
    1. Add a `<h1>` tag with the name of your company
        1. Resize the text to help fill out the header 
        1. Position the text so that it aligns well with your logo and looks appealing
        1. Change the color of the text to match your theme
        1. As a bonus research a method to add a shadow to your text
    1. Based on the steps from CSS Design & Layout 1 - Feature Set 2 - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/css_design_layout_1#feature-set-2-layout-2" target="_blank">Reference Link</a>
        1. Build out a navigation
        1. **DO NOT** Create the nav in a new file
        1. Create the nav in your header container in your index.html file
        1. The navigation should be displayed horizontally
        1. It should be displayed in the lower right of the header and take up about 50% of the headers width    

### Feature Set 2 - 2 Column Layout (floats)

> #####Beneath your header

>   1. Use a `<section>` tag to create a container to hold your main content
      1. Give the section tag an ID of `fs-2`
      1. Make the width 100% the width of the view area
      1. Make the height about 30% of the view area (depending on the size of your header)
    1. Inside your section tag add two div tags
      1. Both divs should be 100% the height of their container
    1. Make the first div about 25% the width of its container
    1. Make the second div about 75% the width of its container
    1. Add some content to both divs (anything you want)
    1. Using floats, make the two divs sit side by side beneath your header
      1. **Hint:** You may need to adjust the widths a little to get them to fit together
      1. **Hint:** Use borders so you can see how and where everything is fitting together
        
### Feature Set 3 - 2 Column Layout (display)

> #####Beneath your Section fs-2

>   1. Create another `<section>`
      1. Give the section an ID of `fs-3`
      1. Make the width 100% the width of the view area
      1. Make the height about 30% of the view area (depending on the size of your header)
    1. Inside your section tag add two div tags
      1. Both divs should be 100% the height of their container
    1. Make the first div about 25% the width of its container
    1. Make the second div about 75% the width of its container
    1. Add some content to both divs (anything you want)
    1. Using the display property, make the two divs sit side by side beneath your `fs-2` section
      1. **Hint:** You may need to adjust the widths a little to get them to fit together
      1. **Hint:** Use borders so you can see how and where everything is fitting together
        
### Feature Set 4 - Footer

> #####Create a basic footer at the bottom of your page

>   1. Use the `<footer>` tag to create a footer at the end of your page
    1. It should be about 20% of the view area
      1. All sections should combine to equal 100% the height of the view area
        1. Header - 20%
        1. Section fs-2 - 30%
        1. Section fs-3 - 30%
        1. Footer - 20%
      1. Yours can vary slightly just as long as they all equal 100% combined
    1. Add some generic content to your footer
    1. Add a background color to match your header
    
### Feature Set 5 - Gutters

> ##### Create gutters on each side of all your content

>   1. Wrap all your content from header to footer in a div tag
      1. Give the div a class of container
      1. Set its width to 70vw
    1. Change the width of your header, sections and footer to 100% (if that's not what you are using already)
    1. Find a way to center your container on the page (horizontally)
      1. Once you center your container all your content should be centered on the page
      1. This will create a 15vw gutter on each side of your content

## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "css_design_layout_2 - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin css_design_layout_2`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature 
branch/group <b>css_design_layout_2</b>

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
>> 1. `compare: css_design_layout_2`
>>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>>   1. This will usually be the same as the name of the prototype
>> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
>> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>css_design_layout_2 - [you name first & last 
name]</b> already pre populated in the Title field
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
