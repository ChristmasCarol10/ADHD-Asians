var sw = document.querySelector('#color_scheme_switch');

var current_scheme = localStorage.getItem('color_scheme');

if(current_scheme)
{
  document.documentElement.setAttribute('data-color-scheme', current_scheme);
  if(current_scheme === 'dark')
  {
   sw.checked = true;
  }
  else{
   sw.checked = false;
  }
}
else{
 // user didn't saved it or he hates dark mode
}

// alert(current_scheme)

function changeTheme()
{
if(sw.checked){
 document.documentElement.setAttribute('data-color-scheme', 'dark');
 localStorage.setItem('color_scheme', 'dark');
}
else{
 document.documentElement.setAttribute('data-color-scheme', 'light'); // or just empty " "
 localStorage.setItem('color_scheme', 'light'); // or just empty " "
} 
  // alert(document.documentElement.getAttribute('data-color-scheme'))
}

 sw.addEventListener('change', function(){ changeTheme() });

