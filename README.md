## SUI
*a startpage for your server and / or new tab page*

![screenshot](https://i.imgur.com/WLbbGXC.png)

### Customization

#### Apps
Add your apps by editing apps.json:

    {
	    "apps" : [
		    {"name":"Name of app 1","url":"sub1.example.com","icon":"icon-name"},
		    {"name":"Name of app 2","url":"sub2.example.com","icon":"icon-name"}
	    ]
    }

Please note:

 - No `http://` in the URL
 - No `,` at the end of the last app's line
 - Find the names  of icons to use at [Material Design Icons](https://materialdesignicons.com/)

#### Bookmarks
Add your bookmarks by editing links.json:

```
{  
   "bookmarks":[  
      {  
         "category":"Category1",
         "links":[  
            {  
               "name":"Link1",
               "url":"http://example.com"
            },
            {  
               "name":"Link2",
               "url":"http://example.com"
            }
         ]
      },
      {  
         "category":"Category2",
         "links":[  
            {  
               "name":"Link1",
               "url":"http://example.com"
            },
            {  
               "name":"Link2",
               "url":"http://example.com"
            }
         ]
      }
   ]
}
```
Add names for the categories you wish to define and add the bookmarks for each category.

Please note:

 - No `,` at the end of the last bookmark in a category and at the end of the last category
