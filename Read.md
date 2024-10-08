Project-tittle:- patient_Management_system

Project-Overview:- patient can appoint there sheduale for meeting to doctor & Doctor can View there appointent and edit also.

Installation-instructions:- For BackEnd use only = use api that i created in to postman, use with body strucute like,
                            {
                                "first_name":"Jyoti",
                                "last_name":"Singh",
                                "email":"Drjyoti108@gmail.com",
                                "number":9087645678,
                                "age":26, 
                                "height":160,
                                "weight":68,
                                "gender":"female",
                                "bloodg":"A+", 
                                "birth":"1998-04-16",
                                "country":"india",
                                "state":"gujarat",
                                "city":"surat",
                                "address":"socity-1, vesu, citylight-road",
                                "hospital":"bharat hospital",
                                "password":"123",
                                "confirm_password":"123"
                            }
                            for add user=( patient/doctor ) in role based 1 for doctor, 0 for patenst.

Api Documentation:- api to use in postman
                    for regeiter new users = http://127.0.0.1:8001/api/register
                    for login new users    = http://127.0.0.1:8001/api/login
                    for viewing profile    = http://127.0.0.1:8001/api/profile
                    for updating prof data = http://127.0.0.1:8001/api/updateProfile
                    for forpas use this    = http://127.0.0.1:8001/api/CheckEmail   ( and then you can change password from front side so put this link in browser for using it directly )