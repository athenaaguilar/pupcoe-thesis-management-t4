const db = require('../db/db.js')

var actions = {
  createUser: (userData,callback) => {
      const query =
      `INSERT INTO 
        users (first_name,middle_name,last_name,email,password,user_type,contact_no) 
       VALUES 
        ('${userData.firstName}','${userData.middleName}','${userData.lastName}','${userData.email}','${userData.password}','${userData.userType}','${userData.contactNo}') 
        RETURNING id`;
       db.query(query)
      .then(res => callback(res.rows))
      .catch(e => {
        console.log(e)
        callback(e)
      })
    },
    insertStudent: (userData,callback) => {
    const query =
    `INSERT INTO 
      class_members (class_id,user_id) 
     VALUES 
      ('${userData.classid}','${userData.userid}') 
      `;
     db.query(query)
    .then(res => callback(res))
    .catch(e => {
      console.log(e)
      callback(e)
    })
  },
    getByEmail: (email,callback) => {
    const query =
    ` select * from users where email = '${email}'
     `;
     db.query(query)
    .then(res => callback(res.rows[0]))
    .catch(e => callback(e))
  },
    getById: (id,callback) => {
    const query =
    ` select id,user_type from users where id = '${id}'
     `;
     db.query(query)
    .then(res => callback(res.rows[0]))
    .catch(e => callback(e))
  },
  sectionList: (filter,callback) => {
  const query =
  `SELECT
    id,section
   FROM
    class 
    `;
   db.query(query)
  .then(res => callback(res.rows))
  .catch(e => {
    console.log(e)
    callback(e)
  })

  }
}
module.exports = actions