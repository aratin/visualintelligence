var link = window.location.pathname;
var button = null;
var parent = null;
var menuId = $("li.dropdown").attr('id');

function removeClass() {
	$("li.dropdown").removeClass('active');
}

var menulink = [
	{path: "/", button:"home", parent: "home"},
	{path: "/home", button:"home", parent: "home"},
    {path: "/companyprofile", button:"companyprofile", parent: "CompanyInfo"},
    {path: "/mangementteam", button:"mangementteam",  parent: "CompanyInfo"},
    {path: "/differentiator", button:"differentiator", parent: "CompanyInfo"},
    {path: "/career", button:"career", parent: "CompanyInfo"},
    {path: "/contactlist", button:"contactlist", parent: "CompanyInfo"},
    {path: "/partner", button:"partner", parent: "CompanyInfo"},
    {path: "/softwareproduct", button:"softwareproduct", parent: "offering"},
    {path: "/consultingservice", button:"consultingservice", parent: "offering"},
    {path: "/msp", button:"msp", parent: "offering"},
    {path: "/specializedanalyse", button:"specializedanalyse", parent: "offering"},
    {path: "/technologyresale", button:"technologyresale", parent: "offering"},
    {path: "/contactlist", button:"contactlist", parent: "contactlist"},
    {path: "/signin", button:"signin", parent: "signin"}
]

for(var i = 0; i < menulink.length; i++){
	$('#' + menulink[i].parent).removeClass('active');
    if(link == menulink[i].path)
    {
        button = menulink[i].button;
        parent = menulink[i].parent;
    }
}
$("a[href$='" + link + "']").addClass('active');
$('#' + parent).addClass('active');

// $('li.dropdown').on('mouseover', function(e){
//     $(this).find("ul:first").show();
//     $(this).addClass('active');
// }).on('mouseout', function(e){
// 	$(this).find("ul:first").hide();
// 	if($(this).attr('id') !== $('#' + parent).attr('id')) {
//     	$(this).removeClass('active');
// 	}
// });