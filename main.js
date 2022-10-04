  const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
var fs = require("fs");
var Printer_Name, Driver_File, Found =0, index_Of_Found=0,selectedOptions=[],Printer_IP;
const path = require('path');
const url = require('url');
var JsonObj;
var SlecVal=[];
const prompt = require('electron-prompt');
const delay = require('delay');
var oShell = require('child_process').exec;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

    function createWindow () {
      // Create the browser window.
      mainWindow = new BrowserWindow({width: 300, height: 900});

      // and load the index.html of the app.
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }))



    }

function FetchJson()
{

  var data = [
    {
        "Region": "Americas",
        "Site": "Arden Hills",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Arden_Hills",
        "Printserver": "printeast.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Austin",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Austin",
        "Printserver": "printsea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Chicago",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Chicago",
        "Printserver": "printeast.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Denver",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Denver",
        "Printserver": "printsea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Emeryville",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Emeryville",
        "Printserver": "printsf.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Hillsboro",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Hillsboro",
        "Printserver": "printsea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Los Angeles",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Los_Angeles",
        "Printserver": "printsj.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "McLean",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "McLean",
        "Printserver": "printeast.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Newton",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Newton",
        "Printserver": "printeast.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "New York",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "New_York",
        "Printserver": "printeast.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Ottawa",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Ottawa",
        "Printserver": "printeast.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Portland",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Portland",
        "Printserver": "printsea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "San Francisco",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "San_Francisco",
        "Printserver": "printsf.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "San Jose",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "San_Jose",
        "Printserver": "printsj.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Seattle",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Seattle",
        "Printserver": "printsea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Utah",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Utah",
        "Printserver": "printut.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Americas",
        "Site": "Toronto",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Toronto",
        "Printserver": "printeast.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Amsterdam",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Amsterdam",
        "Printserver": "print-emea2.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": ""
    },
    {
        "Region": "EMEA",
        "Site": "Barcelona",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Barcelona",
        "Printserver": "print-emea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Basel",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Basel",
        "Printserver": "print-emea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Berlin",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Amsterdam",
        "Printserver": "print-emea2.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": ""
    },
    {
        "Region": "EMEA",
        "Site": "Brussels",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Brussels",
        "Printserver": "print-emea2.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Bucharest",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Bucharest",
        "Printserver": "print-emea2.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Copenhagen",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Copenhagen",
        "Printserver": "print-emea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Dublin",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Dublin",
        "Printserver": "print-emea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Hamburg",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Hamburg",
        "Printserver": "print-emea2.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Milan",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Milan",
        "Printserver": "print-emea2.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Munich",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Munich",
        "Printserver": "print-emea2.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Paris",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Paris",
        "Printserver": "print-emea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Warsaw",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Warsaw",
        "Printserver": "print-emea.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "EMEA",
        "Site": "Zurich",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "Zurich",
        "Printserver": "print-emea2.corp.adobe.com",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": "CNADVC3525X1.ppd"
    },
    {
        "Region": "Dummy Record",
        "Site": "",
        "Office": "",
        "Tower": "",
        "Floor": "",
        "Printer_IP": "",
        "Printer_Name": "",
        "Printserver": "",
        "Site_Next": 0,
        "Office_Next": 0,
        "Tower_Next": 0,
        "Driver_File": ""
    }
]
    JsonObj = JSON.parse(JSON.stringify(data));

}



function NextSh(serial,i) // Show the Next menu depending upon the value passed to it
{
    var select, option, findSel=0;

    if (serial == 1)
        {
        ShowD("OfficeDiv");
        HideD("TowerDiv");
        HideD("FloorDiv");


        var select = document.getElementById('OfficeSel');

        if(JsonObj[i].Office !=JsonObj[i+1].Office )
                {

           option = document.createElement('option');
                option.text = JsonObj[i].Office;
                select.add(option);

                }

        }

        if (serial == 2)
        {
        ShowD("TowerDiv");
        HideD("FloorDiv");
            var select = document.getElementById('TowerSel');


            if(JsonObj[i].Tower !=JsonObj[i+1].Tower )
                {

           option = document.createElement('option');
                option.text = JsonObj[i].Tower;
                select.add(option);

                }
        }
       if (serial == 3)
        {
        ShowD("FloorDiv");
        var select = document.getElementById('FloorSel');
            if(JsonObj[i].Floor !=JsonObj[i+1].Floor )
                {
           option = document.createElement('option');
                option.text = JsonObj[i].Floor;
                select.add(option);

                }
        }
    if(serial==5)
        {
        ShowD("SiteDiv");
        HideD("OfficeDiv");
        clearOpt("OfficeSel");
        HideD("TowerDiv");
        clearOpt("TowerSel");
        HideD("FloorDiv");
        clearOpt("FloorSel");
        }
}


function ShowD(elem)
{
    var nextDD = document.getElementById(elem);
        nextDD.style.display = 'block';
    //console.log(elem);
}
function HideD(elem)
{
    var nextDD = document.getElementById(elem);
        nextDD.style.display = 'none';
}


//Function which will run when the Submit button is clicked.
function runC() {

//common tasks
var d = new Date();

console.log("UTC: "+d.toUTCString()+"     Non UTC- " +d + "  Milliseconds - "+ d.getTime());

for(var i = 0; i<JsonObj.length ;i++)
    {
      var a=JsonObj[i];
      console.log("The Selected Record is : ", a.Region, a.Site);

        if(a.Region==SlecVal[0] && a.Site==SlecVal[1] && a.Office== SlecVal[2] && a.Tower== SlecVal[3] && a.Floor== SlecVal[4])
            {
                Printer_Name = a.Printer_Name;
                Driver_File = a.Driver_File;
                Printer_IP = a.Printer_IP;
                Print_Server = a.Printserver;
                console.log("The Selected Record is : ", a);
                console.log("SlecVal0 = ",SlecVal[0]);
                break;
            }

    }
//NA Flow
if (SlecVal[0] == 'Americas' )
        {
    prompt({
        width:250,
        title: 'Identification required',
        label: 'Please enter your username',
        inputAttrs:
        {
            type: 'text',
            required:'true'
        },
        type: 'input'
    })
    .then((r)=> {

        //alert(Print_Server + "\n" + Printer_Name);

        if(r===null)
            console.log ('UserName prompt Cancelled');

        else{
            username = r;
            console.log(username);
            //alert("You Made it to the else " + username);
            const path = require('path');

            appDir = __dirname;
            directoryPath = path.dirname(appDir);

            console.log(appDir);

            //alert(directoryPath);

            var Shellstat = oShell('lpadmin -p SecurePrint -E -v lpd://'+username+'@'+Print_Server+'/adobesecureprint -P '+directoryPath+'/extraResources/CNADVC3525IIIX1.PPD -o printer-is-shared=false',(error, stdout, stderr) =>
            {
                //alert(error);
                console.log(oShell);
                 if (error)
                    {
                    alert(`An Error encountered while installing the Secure printer. Please try again or contact 6HELP \n\n`+error);
                    console.log('Error : '+error)
                        return;
                    }
                else {
                 alert("Secure Printer was installed successfully.");
                   console.log('Error : '+error)
                   console.log('Stderr : '+stderr)
                   console.log('Stdout : '+stdout)
                   console.log('Printer Name : '+Printer_Name)
                   console.log('Driver File from directory : '+Driver_File)
                   console.log('Printer_IP : '+Printer_IP)
                   console.log('Printer Server : '+Print_Server)
                 }
               });
             }
            //alert("You Made it passed the shell script");
          });
        }

//EMEA Flow
if (SlecVal[0] == 'EMEA' )
        {
    prompt({
        width:250,
        title: 'Identification required',
        label: 'Please enter your username',
        inputAttrs:
        {
            type: 'text',
            required:'true'
        },
        type: 'input'
    })
    .then((r)=> {

        if(r===null)
            console.log ('UserName prompt Cancelled');

        else{
                username = r;
                //console.log("You're in the EMA");
                //alert("You Made it to the else " + username);
                const path = require('path');

                appDir = __dirname;
                directoryPath = path.dirname(appDir);

                console.log(appDir);

                //alert(directoryPath);
                //alert(Print_Server);

                var Shellstat = oShell('lpadmin -p SecurePrint -E -v lpd://'+username+'@'+Print_Server+'/adobesecureprinteu  -P '+directoryPath+'/extraResources/CNADVC3525IIIX1.PPD -o printer-is-shared=false',(error, stdout, stderr) =>
                {
                    //alert(error);
                     if (error)
                        {
                        alert(`An Error encountered while installing the Secure printer. Please try again or contact 6HELP \n\n`+error);
                        console.log('Error : '+error)
                            return;
                        }
                    else {
                     alert("Secure Printer was installed successfully.");
                       console.log('Error : '+error)
                       console.log('Stderr : '+stderr)
                       console.log('Stdout : '+stdout)
                       console.log('Printer Name : '+Printer_Name)
                       console.log('Driver File from directory : '+Driver_File)
                       console.log('Printer_IP : '+Printer_IP)
                       console.log('Printer Server : '+Print_Server)
                     }
                   });
                 }

               });
         }

    }

    function ClearC()
    {
        //document.getElementById('RegionSel').selectedIndex=0;
        clearOpt('RegionSel');
        clearOpt('SiteSel');
        HideD("SiteDiv");
        clearOpt('OfficeSel');
        HideD('OfficeDiv');
        clearOpt('TowerSel');
        HideD('TowerDiv');
        clearOpt('FloorSel');
        HideD('FloorDiv');

     }

    function clearOpt(elem)
    {
        var option = document.createElement('option');
        option.text = "--Please select--";
        document.getElementById(elem).innerHTML="";
        document.getElementById(elem).add(option);

    }
  function showMain()
  {

    console.log('Showing Main');
    ShowD('MainDiv');
    HideD('PromptDiv');

  }


//Populates the Menus. Params: elem-Next Drop Down; SelR- Current Selected value; MenuSR-Which funtion called it.
function populateDD(MenuSR)
{

var select,selOpt,SelR,option;

    if(MenuSR==1) // Show and Populate Site Drop Down
        {
        FetchJson();
        NextSh(5,0);

        SlecVal=["","","","",""];

        selOpt = document.getElementById("RegionSel");
        SlecVal[0] = SelR = selOpt.options[selOpt.selectedIndex].text;



        select = document.getElementById("SiteSel");
        clearOpt("SiteSel");

for(var i=0; i<JsonObj.length;i++)
         {
    if(JsonObj[i].Region == SelR)
            {
       if(JsonObj[i].Site != JsonObj[i+1].Site)
       {
           option = document.createElement('option');
                option.text = JsonObj[i].Site;
                select.add(option);
        }
            }
         }
        }

    if(MenuSR==2) // Show and Populate Office Drop Down
    {
        var select;
            selOpt = document.getElementById("SiteSel");
            SlecVal[1]=SelR = selOpt.options[selOpt.selectedIndex].text;
            SlecVal[2]=SlecVal[3]=SlecVal[4]="";

        //ShowD("OfficeSel");
        clearOpt("OfficeSel");
        clearOpt("TowerSel");
        HideD("TowerDiv");
        clearOpt("FloorSel");
        HideD("FloorDiv");
Found = 0 ;
            for(var i=0; i<=JsonObj.length;i++)
                     {
                         if (i+1<=JsonObj.length)
                             {
                         if(JsonObj[i].Site==SelR)
                         {
                             if(JsonObj[i].Site_Next!=1)
                                 HideD("OfficeDiv");
                             Found+= 1;
                             index_Of_Found =i;
                             NextSh(JsonObj[i].Site_Next,i);
                         }}
                         else {


                         }
                     }
                if(Found==1)
            {
                Driver_File = JsonObj[index_Of_Found].Driver_File;
                Printer_Name = JsonObj[index_Of_Found].Printer_Name;
                Found=0;
            }
    }



    if(MenuSR==3) // Show and Populate Tower Drop Down
{


        clearOpt("TowerSel");
        clearOpt("FloorSel");
        HideD("FloorDiv");
    Found = 0;
            selOpt = document.getElementById("OfficeSel");
            SlecVal[2] = SelR = selOpt.options[selOpt.selectedIndex].text;
            SlecVal[3]=SlecVal[4]="";

               for(var i=0; i<=JsonObj.length;i++)
                     {
                         if(JsonObj[i].Office==SelR)
                             {
                             Found+= 1;
                             index_Of_Found =i;
                         NextSh(JsonObj[i].Office_Next,i);
                             }
                     }
            if(Found==1)
            {
                Driver_File = JsonObj[index_Of_Found].Driver_File;
                Printer_Name = JsonObj[index_Of_Found].Printer_Name;
                Found=0;
            }

    }

    if(MenuSR==4) // Show and Populate Floor Drop Down

            {

        Found = 0;
            selOpt = document.getElementById("TowerSel");
            SlecVal[3] = SelR = selOpt.options[selOpt.selectedIndex].text;
                SlecVal[4]="";


        clearOpt("FloorSel");

                for(var i=0; i<=JsonObj.length;i++)
                 {

            if(JsonObj[i].Tower == SelR && JsonObj[i].Site == SlecVal[1] && JsonObj[i].Office == SlecVal[2])
                    {
                             Found+= 1;
                             index_Of_Found =i;
                        NextSh(JsonObj[i].Tower_Next,i);
                    }
                 }

        if(Found==1)
            {
                Driver_File = JsonObj[index_Of_Found].Driver_File;
                Printer_Name = JsonObj[index_Of_Found].Printer_Name;
                Found=0;
            }
        }

    if(MenuSR==5) // Copy the Driver File name and Printer Name

            {

                Found = 0;
            selOpt = document.getElementById("FloorSel");
            SlecVal[4] = SelR = selOpt.options[selOpt.selectedIndex].text;


            for(var i=0; i<=JsonObj.length;i++)
                 {

            if(JsonObj[i].Floor == SelR)
                    {
                             Found+= 1;
                             index_Of_Found =i;
                    }
                 }

        if(Found==1)
            {
                Driver_File = JsonObj[index_Of_Found].Driver_File;
                Printer_Name = JsonObj[index_Of_Found].Printer_Name;
            }
        }

}


//On OS X it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.

app.on('activate', function () {
  if (mainWindow == null) {
        createWindow();
      }
});

//MainWindow
   app.on('ready', createWindow);

//Before Quit function
   app.on('quit', function () {

     }
  );
//app.quit();
