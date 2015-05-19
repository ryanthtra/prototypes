### create an array named student_array
- it should contain 10 objects with the following definition: {name: &lt;pick a name;&gt;}, class:&lt;pick a class;&gt;}
- For example:
	- [
		{name: 'John', class:'Physics'},
		{name: 'Jane', class:'Math'},
		{name: 'Joan', class:'English'},
	  ]

###
- Create a repeat loop that creates a div for each student in a main container, for example:
<pre><xmp>
<div id='student_container'>
	<div class='student_row'>
		<span class='student_name'>John</span>
		<span class='student_class'>Physics</span>
	</div>
	<div class='student_row'>
		<span class='student_name'>Jane</span>
		<span class='student_class'>Math</span>
	</div>
</div>
</xmp></pre>
### In your repeat loop above
- create an attribute for student_row that holds the index for each student
- for example:
<pre><xmp>
<div id='student_container'>
	<div class='student_row' data-index='0'>
		<span class='student_name'>John</span>
		<span class='student_class'>Physics</span>
	</div>
	<div class='student_row' data-index='1'>
		<span class='student_name'>Jane</span>
		<span class='student_class'>Math</span>
	</div>
</div>
</xmp></pre>
