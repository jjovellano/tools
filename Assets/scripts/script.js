function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


function generateTemplate() {
   
    const textarea = document.getElementById('note');
    var surname = document.getElementById('surname').value.toLowerCase();
  var item = document.getElementById('item').value.toLowerCase();
  var pnr = document.getElementById('pnr').value.toLowerCase();
  var itemDescription = document.getElementById('itemDescription').value.toLowerCase();
  var colourSizeBrand = document.getElementById('colourSizeBrand').value.toLowerCase();
  var whereOnTheBus = document.getElementById('whereOnTheBus').value.toLowerCase();
  var bagContents = document.getElementById('bagContents').value.toLowerCase();
  var reasonWhy = document.getElementById('reasonWhy').value.toLowerCase();
  textarea.value = surname +"/carryon/" + item + "/" +pnr + "\r\n"+ "\r\n" + 
   "CARRY ON" + "\r\n" +
   "DESCRIPTION OF THE MISSING ITEM: " + itemDescription + "\r\n" +
   "COLOUR/SIZE/BRAND: " + colourSizeBrand + "\r\n" +
   "FOR CARRY ON WHERE ITEM MAY HAVE BEEN LEFT " + "\r\n" +
   "AND WHERE ON THE BUS THEY WERE SITTING: " + whereOnTheBus + "\r\n" +
   "IF ITS BAG. CONTENTS OF THE BAG: " + bagContents + "\r\n" +
   "REASON:  " + reasonWhy + "\r\n" + "\r\n"+ "\r\n"+ "\r\n"+ "\r\n"+ "\r\n" + "generated using jeromeTools" ;
   
}

function generateTemplateSMS() {
   
  const textarea = document.getElementById('note');
  var surname = document.getElementById('surname').value.toUpperCase();
  var phoneNumber = document.getElementById('phoneNumber').value.toUpperCase();
var item = document.getElementById('item').value.toUpperCase();
var pnr = document.getElementById('pnr').value.toUpperCase();
var itemDescription = document.getElementById('itemDescription').value.toUpperCase();
var colourSizeBrand = document.getElementById('colourSizeBrand').value.toUpperCase();
var whereOnTheBus = document.getElementById('whereOnTheBus').value.toLowerCase();
var bagContents = document.getElementById('bagContents').value.toLowerCase();
var reasonWhy = document.getElementById('reasonWhy').value.toLowerCase();
textarea.value = "0" + phoneNumber + "@sms.tnz.com.nz" + "\r\n" + "\r\n" + "Ref:" + surname +" " + item + "-" +pnr  + " " + itemDescription +
 "@" + colourSizeBrand +
 " view website for bus stop description. Intercity.co.nz ";
 
}

function generateTemplate2() {

const textarea = document.getElementById('note');
var surname2 = document.getElementById('surname2').value.toLowerCase();
var item2 = document.getElementById('item2').value.toLowerCase();
var pnr2 = document.getElementById('pnr2').value.toLowerCase();
var itemDescription2 = document.getElementById('itemDescription2').value.toLowerCase();
var colourSizeBrand2 = document.getElementById('colourSizeBrand2').value.toLowerCase();
var bagContents2 = document.getElementById('bagContents2').value.toLowerCase();
var reasonWhy2 = document.getElementById('reasonWhy2').value.toLowerCase();
var baglabelled = document.getElementById('bagLabelled').value.toLowerCase();
var adviseDriver = document.getElementById('adviseDriver').value.toLowerCase();
var adviseDriver = document.getElementById('adviseDriver').value.toLowerCase();
var ownBag = document.getElementById('ownBag').value.toLowerCase();
var transfer = document.getElementById('transfer').value.toLowerCase();
textarea.value = surname2 + "/undercarriage/" + item2 + "/" + pnr2 + "\r\n"+ "\r\n" + 
   "UNDERCARRIAGE" + "\r\n" +
   "DESCRIPTION OF THE MISSING ITEM: " + itemDescription2 + "\r\n" +
   "COLOUR/SIZE/BRAND: " + colourSizeBrand2 + "\r\n" +
   "IF ITS BAG, CONTENTS OF THE BAG: " + bagContents2 + "\r\n" +
   "REASON: " + reasonWhy2 + "\r\n" + "\r\n" + "\r\n" +
   "WAS THE BAG LABELLED: " + baglabelled + "\r\n"  +
   "DID YOU ADVISE THE DRIVER: " + adviseDriver + "\r\n"  +
   "DID YOU PUT YOUR OWN BAG ON THE BUS: " + ownBag + "\r\n"  +
   "IF TRANSFER SERVICE DID THE DRIVER TRANSFER THE BAG: " + transfer + "\r\n"+ "\r\n"+ "\r\n"+ "\r\n"+ "\r\n" + "generated using jeromeTools" ;

}

function copyToClipboard() {
    const textarea = document.getElementById('note');
    textarea.select();
    document.execCommand('copy');
    window.alert("copied to clipboard");
}

function hideLPform() {
    document.getElementById("carryonForm").style.display="none";
}
function showLPform() {
    document.getElementById("carryonForm").style.display="block";
    document.getElementById("undercarriageForm").style.display="none"
    document.getElementById("note").style.display="block"
    document.getElementById("note").rows = "32";
}

function hideUnderLPform() {
    document.getElementById("undercarriageForm").style.display="none";
}
function showUnderLPform() {
    document.getElementById("undercarriageForm").style.display="block";
    document.getElementById("carryonForm").style.display="none";
    document.getElementById("note").style.display="block"
    document.getElementById("note").rows = "43";
}

function hideAllLPform() {
    document.getElementById("undercarriageForm").style.display="none";
    document.getElementById("carryonForm").style.display="none";
    document.getElementById("note").style.display="none";
}

function clearForm() {
    const textarea = document.getElementById('note');
    document.getElementById("carryonForm").reset();
    document.getElementById("undercarriageForm").reset();  
    textarea.value =""
}

function openCRM() {
  var pnr = document.getElementById('pnr').value;
  window.open(`https://intercitygroupnz.crm6.dynamics.com/main.aspx?app=d365default&forceUCI=1&pagetype=search&searchText=${pnr}`)  
}


function openCRM2() {
  var pnr2 = document.getElementById('pnr2').value;
  window.open(`https://intercitygroupnz.crm6.dynamics.com/main.aspx?app=d365default&forceUCI=1&pagetype=search&searchText=${pnr2}`)  
}


function creditToRewards() {
  const answer = document.getElementById('points');
 var dollars = document.getElementById('dollars').value;
  answer.value = dollars * 100;
}

function dollarsToRewards() {
  const answer2 = document.getElementById('points2');
  const rewardsDollars = document.getElementById('rewardDollars');
 var dollars2 = document.getElementById('dollars2').value;
  answer2.value = dollars2 * 7.5;
  rewardsDollars.value = answer2.value / 100
}

function getDelay() {
  var lastScheduled = document.getElementById('lastScheduled').value;
  var actualCheckin = document.getElementById('actualCheckin').value;
  const delay = document.getElementById('delay');
const j = new Date();
j.getMinutes();
delay.value = j;
}

