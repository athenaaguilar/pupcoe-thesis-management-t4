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
//ADMIN---------------------------------------------

//FACULTY---------------------------------------------
app.get('/faculty/home', function(req, res) {
	res.render('cpe_faculty/faculty_home',{
		published: true
	});
});

app.get('/faculty/advisory', function(req, res) {
	res.render('cpe_faculty/faculty_advisory',{
		published: true
	});
});

app.get('/faculty/proposals', function(req, res) {
	res.render('cpe_faculty/faculty_proposals',{
		published: true
	});
});

app.get('/faculty/schedule', function(req, res) {
	res.render('cpe_faculty/faculty_schedule',{
		published: true
	});
});
//FACULTY---------------------------------------------

//GUEST PANEL---------------------------------------------
app.get('/guest_panel/home', function(req, res) {
	res.render('cpe_guest_panel/guest_panel_home',{
		published: true
	});
});

app.get('/guest_panel/schedule', function(req, res) {
	res.render('cpe_guest_panel/guest_panel_schedule',{
		published: true
	});
});
//GUEST PANEL---------------------------------------------

//STUDENT---------------------------------------------
app.get('/signup', function(req, res) {
	res.render('cpe_students/students_signup',{
		published: true
	});
});

app.get('/students/home', function(req, res) {
	res.render('cpe_students/students_home',{
		published: true
	});
});

app.get('/students/proposal', function(req, res) {
	res.render('cpe_students/students_proposal',{
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