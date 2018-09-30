const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { Client } = require('pg');

// instantiate client using your DB configurations
const client = new Client({
	database: 'storedb',
	user: 'postgres',
	password: '123',
	host: 'localhost',
	port: 5432
});

const app = express();
// tell express which folder is a static/public folder
app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', exphbs({
	defaultLayout:'main',
	layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine','handlebars');
app.set('port',(process.env.PORT|| 3000));
app.use(express.static(path.join(__dirname, 'public')));

//--------------------------------------------------
app.get('/', function (req, res) {
  res.render('home', { });
});

app.get('/home', function(req, res) {
	res.render('home',{
		published: true
	});
});

app.get('/forgot_password', function(req, res) {
	res.render('forgot_password',{
		published: true
	});
});

app.get('/compendium', function(req, res) {
	res.render('compendium',{
		published: true
	});
});
//--------------------------------------------------

//ADMIN---------------------------------------------
app.get('/admin/login', function(req, res) {
	res.render('cpe_admin/admin_login',{
		published: true
	});
});

app.get('/admin/dashboard', function(req, res) {
	res.render('cpe_admin/admin_dashboard',{
		published: true
	});
});

app.get('/admin/registration', function(req, res) {
	res.render('cpe_admin/admin_registration',{
		published: true
	});
});

app.get('/admin/students', function(req, res) {
	res.render('cpe_admin/admin_students',{
		published: true
	});
});

app.get('/admin/faculty', function(req, res) {
	res.render('cpe_admin/admin_faculty',{
		published: true
	});
});

app.get('/admin/guest_panel', function(req, res) {
	res.render('cpe_admin/admin_guest_panel',{
		published: true
	});
});

app.get('/admin/schedule', function(req, res) {
	res.render('cpe_admin/admin_schedule',{
		published: true
	});
});

app.get('/admin/settings', function(req, res) {
	res.render('cpe_admin/admin_account_settings',{
		published: true
	});
});
//ADMIN---------------------------------------------

//FACULTY---------------------------------------------
app.get('/faculty/dashboard', function(req, res) {
	res.render('cpe_faculty/faculty_dashboard',{
		published: true
	});
});

app.get('/faculty/proposals', function(req, res) {
	res.render('cpe_faculty/faculty_proposals',{
		published: true
	});
});

app.get('/faculty/mor', function(req, res) {
	res.render('cpe_faculty/faculty_mor',{
		published: true
	});
});

app.get('/faculty/dp1', function(req, res) {
	res.render('cpe_faculty/faculty_dp_1',{
		published: true
	});
});

app.get('/faculty/dp2', function(req, res) {
	res.render('cpe_faculty/faculty_dp_2',{
		published: true
	});
});

app.get('/faculty/schedule', function(req, res) {
	res.render('cpe_faculty/faculty_schedule',{
		published: true
	});
});

app.get('/faculty/settings', function(req, res) {
	res.render('cpe_faculty/faculty_account_settings',{
		published: true
	});
});
//FACULTY---------------------------------------------

//ADVISER---------------------------------------------
app.get('/adviser/dashboard', function(req, res) {
	res.render('cpe_adviser/adviser_dashboard',{
		published: true
	});
});

app.get('/adviser/proposals', function(req, res) {
	res.render('cpe_adviser/adviser_proposals',{
		published: true
	});
});

app.get('/adviser/mor', function(req, res) {
	res.render('cpe_adviser/adviser_mor',{
		published: true
	});
});

app.get('/adviser/dp1', function(req, res) {
	res.render('cpe_adviser/adviser_dp_1',{
		published: true
	});
});

app.get('/adviser/dp2', function(req, res) {
	res.render('cpe_adviser/adviser_dp_2',{
		published: true
	});
});

app.get('/adviser/schedule', function(req, res) {
	res.render('cpe_adviser/adviser_schedule',{
		published: true
	});
});

app.get('/adviser/settings', function(req, res) {
	res.render('cpe_adviser/adviser_account_settings',{
		published: true
	});
});
//ADVISER---------------------------------------------

//GUEST PANEL---------------------------------------------
app.get('/guest_panel/home', function(req, res) {
	res.render('cpe_guest_panel/guest_panel_home',{
		published: true
	});
});

app.get('/guest_panel/mor', function(req, res) {
	res.render('cpe_guest_panel/guest_panel_mor',{
		published: true
	});
});

app.get('/guest_panel/dp1', function(req, res) {
	res.render('cpe_guest_panel/guest_panel_dp_1',{
		published: true
	});
});

app.get('/guest_panel/dp2', function(req, res) {
	res.render('cpe_guest_panel/guest_panel_dp_2',{
		published: true
	});
});

app.get('/guest_panel/schedule', function(req, res) {
	res.render('cpe_guest_panel/guest_panel_schedule',{
		published: true
	});
});

app.get('/guest_panel/settings', function(req, res) {
	res.render('cpe_guest_panel/guest_panel_account_settings',{
		published: true
	});
});
//GUEST PANEL---------------------------------------------

//STUDENT---------------------------------------------
app.get('/students/home', function(req, res) {
	res.render('cpe_students/students_home',{
		published: true
	});
});

app.get('/students/mor', function(req, res) {
	res.render('cpe_students/students_mor',{
		published: true
	});
});

app.get('/students/dp1', function(req, res) {
	res.render('cpe_students/students_dp_1',{
		published: true
	});
});

app.get('/students/dp2', function(req, res) {
	res.render('cpe_students/students_dp_2',{
		published: true
	});
});

app.get('/students/schedule', function(req, res) {
	res.render('cpe_students/students_schedule',{
		published: true
	});
});

app.get('/students/adviser', function(req, res) {
	res.render('cpe_students/students_adviser',{
		published: true
	});
});

app.get('/students/settings', function(req, res) {
	res.render('cpe_students/students_account_settings',{
		published: true
	});
});
//STUDENT---------------------------------------------

app.listen(app.get('port'), function() {
	console.log('Server started at port 3000');
});