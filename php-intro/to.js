document.addEventListener('DOMContentLoaded', function(){
    //EXERCISE 1
    var variable1 = 'hello';
    var variable2 = 4;
    var variable3 = ['foo', 'bar'];


    //EXERCISE 2
    variable1 = 4;
    variable1 = 'hello';


    //EXERCISE 3
    var numbers = [3, 5, 16, 3, 4, 18];
    var result = numbers[0];
    var length = numbers.length;
    for (var i = 1; i < length; i++)
        result += numbers[i];
    document.getElementsByTagName('body')[0].appendChild(document.createElement('span').appendChild(document.createTextNode('Result = ' + result)));

    //EXERCISE 4
    document.getElementsByTagName('body')[0].appendChild(document.createElement('span').appendChild(document.createTextNode('This is a string' + 'This is another string')));



    //EXERCISE 5
    var my_float = 3.5;
    var my_int = parseInt(my_float);
    var my_float2 = 5.3;
    var my_int2 = parseInt(my_float2);


    //EXERCISE 6
    var my_var1 = 'Hello';
    var my_var2;
    if (my_var2 !== undefined)
        document.getElementsByTagName('body')[0].appendChild(document.createElement('span').appendChild(document.createTextNode(my_var2)));
    else
        document.getElementsByTagName('body')[0].appendChild(document.createElement('span').appendChild(document.createTextNode(my_var1)));



    //EXERCISE 7
    var check_var = 'What time is it?';
    switch (check_var)
    {
        case 'hello':
            document.getElementsByTagName('body')[0].appendChild(document.createElement('span').appendChild(document.createTextNode('greetings')));
            break;
        case 'bye':
            document.getElementsByTagName('body')[0].appendChild(document.createElement('span').appendChild(document.createTextNode('good bye')));
            break;
        default:
            document.getElementsByTagName('body')[0].appendChild(document.createElement('span').appendChild(document.createTextNode('It\'s party time!')));
            break;
    }


    //EXERCISE 8
    var student = {
        'name': 'Skippy',
        'class': 'English',
        'grade': 75 
    };


    //EXERCISE 9
    student = {};
    student.name = 'Skippy';
    student.class = 'English';
    student.grade = 75;



    //EXERCISE 10
    var num_array = [35, 2, 14, 56, 65, 52];
    function find_greatest_num_and_index(direction)
    {
        var greatest = null;
        var greatest_index = null;
        var i = null;
        var increment = null;
        var end_loop = null;

        if (direction >= 0)
        {
            i = 0;
            increment = 1;
            end_loop = num_array.length;
        }
        else
        {
            i = num_array.length;
            increment = -1;
            end_loop = 0;
        }

        while (i != end_loop)
        {
            if (num_array[i] > greatest)
            {
                greatest = num_array[i];
                greatest_index = i;
            }
            i += increment;
        }
        return(
        {
            'greatest': greatest,
            'greatest_index': greatest_index
        });
    }

    find_greatest_num_and_index(1);

});