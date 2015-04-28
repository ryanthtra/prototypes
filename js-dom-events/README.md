# Prototypes

## Javascript - DOM Events

To get these files to your local machine you will need to do the following

1. Open your console to the proper directory
2. pull from the original Learningfuze repo
	- Use the following command:
		`git pull https://github.com/Learning-Fuze/prototypes.git master`
	- This will pull all the files from the original LearningFuze repo that you forked from, then merge the files with your existing files on your local machine.

<a href="https://github.com/Learning-Fuze/git-workflow#github-workflow">Click Here</a> For help with gitHub 

### Getting Started

1. Make an index.html inside the `js-dom-events` folder

2. Create a basic HTML DOM structure
	- DOCTYPE tag
	- HTML tag
	- head tag
	- body tag

## Comparisons

### Prototype

#### Using the `onclick` Attribute

1. Inside your body tags create a `button` it can say whatever you like
	- Inside your opening `button` tag add an `onclick` attribute
	- Set the value of `onclick` to a `console.log()` add a message to be logged out
	- Example: `"My button has been clicked"`
2. Now add a `h1` tag, it can also say whatever you would like
	- Inside your opening `h1` tag add an `onclick` attribute
	- Set the value of `onclick` to a `console.log()` add a message to be logged out
	- Example: `"My header has been clicked"`

**Note** - Make sure to create unique messages for each `onclick` event

Open your page in your browser (open your console)

- Try clicking your button. What happens in the console?
- Try clicking your header. What happens in the console?

#### Using the `onload` Attribute

1. In your opening `body` tag  add an `onload` attribute
	- Set the value of `onload` to a `console.log()` add a message to be logged out
	- Example: `"Body loaded"`
2. In your opening `button` tag add an `onload` attribute
	- Set the value of `onload` to a `console.log()` add a message to be logged out
	- Example: `"Button loaded"`

**Reminder** - Use unique and identifiable messages for your `console.log()`s

Save your changes 
Refresh your page in the browser

What load messages did you see in your console?

#### More `onclick` Fun

1. Create a `p` tag, write a short sentence
2. Choose a word from your sentence and surround it with `<em></em>` tags
	- Example: `<p>This is my <em>sentence</em></p>`
3. Inside your opening `em` tag add an `onclick` attribute
4. Set the value of `onclick` 

## After you have completed all the above

1. add, commit, and push your updated files to your master branch on gitHub
	- <a href="https://github.com/Learning-Fuze/git-workflow#step-4---pushing-your-work-back-to-github">Click Here</a> If you need help pushing to gitHub
2. Create a pull request
	- If your last pull request for the `prototypes` repo is still open, you can skip this step
	- <a href="https://github.com/Learning-Fuze/git-workflow#step-5---creating-a-pull-request-1">Click Here</a> For help creating a pull request
