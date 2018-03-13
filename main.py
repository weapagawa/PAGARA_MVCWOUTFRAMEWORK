#!flask/bin/python
from flask import Flask, jsonify, url_for, request
from flask_httpauth import HTTPBasicAuth
import sys, os
import flask
import model

app = Flask(__name__)
auth = HTTPBasicAuth()

def spcall(qry, param, commit=False):
    try:
        dbo = model.DBconn()
        cursor = dbo.getcursor()
        cursor.callproc(qry, param)
        res = cursor.fetchall()
        if commit:
            dbo.dbcommit()
        return res
    except:
        res = [("Error: " + str(sys.exc_info()[0]) + " " + str(sys.exc_info()[1]),)]
    return res


@auth.get_password
def getpassword(username):
    return 'akolagini'


@app.route('/login', methods=['POST', 'GET'])
def login():
    params = request.get_json()
    username = params["username"]
    password = params["password"]

    res = spcall('login', (username, password), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    else:
        return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/add_post', methods=['POST'])
def postmyad1():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("postmyad1",(book_name, description, price, category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/post_profile/', methods=['POST'])
def postmyprof():

    params = request.get_json()
    firstname = params["firstname"]
    lastname = params["lastname"]
    address = params["address"]
    mobile = params["mobile"]
    email = params["email"]
    weblink = params["weblink"]

    res = spcall("postmyprof",(firstname, lastname, address, mobile, email, weblink), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})


@app.route('/editmyad1', methods=['POST'])
def editmyad1():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad1",(book_name, description, price, category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/editmyad2', methods=['POST'])
def editmyad2():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad2",(book_name, description, price, category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/editmyad3', methods=['POST'])
def editmyad3():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad3",(book_name, description, price, category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/editmyad4', methods=['POST'])
def editmyad4():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad4",(book_name, description, price, category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/editmyad5', methods=['POST'])
def editmyad5():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad5",(book_name, description,  price, category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/editmyad6', methods=['POST'])
def editmyad6():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad6",(book_name, description, price, category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/editmyad7', methods=['POST'])
def editmyad7():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad7",(book_name, description,  price,category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/editmyad8', methods=['POST'])
def editmyad8():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad8",(book_name, description, price, category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/editmyad9', methods=['POST'])
def editmyad9():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad9",(book_name, description, price,  category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/editmyad10', methods=['POST'])
def editmyad10():

    params = request.get_json()
    book_name = params["book_name"]
    description = params["description"]
    price = params["price"]
    category = params["category"]
    photo = params["photo"]
    details = params["details"]

    res = spcall("editmyad10",(book_name, description, price, category, photo, details), True)

    if 'Error' in res[0][0]:
        return jsonify({'status': 'error', 'message': res[0][0]})
    return jsonify({'status': 'ok', 'message': res[0][0]})



@app.route('/displayme/', methods=['GET'])
def displayme():
    res = spcall('displayme', (), True)

    if 'Error' in str(res[0][0]):
        return jsonify({'status': 'error', 'message': res[0][0]})
    recs = []
    for r in res:
        recs.append({"book_name": str(r[0]), "description": str(r[1]), "price": str(r[2]), "category": str(r[3]), "photo": str(r[4]), "details": str(r[5])})
    return jsonify({'status': 'ok', 'entries': recs, 'count': len(recs)})

@app.route('/display_all/', methods=['GET'])
def display_all():
    res = spcall('display_all', (), True)

    if 'Error' in str(res[0][0]):
        return jsonify({'status': 'error', 'message': res[0][0]})
    recs = []
    for r in res:
        recs.append({"book_name": str(r[0]),  "description": str(r[1]), "price": str(r[2]), "category": str(r[3]), "photo": str(r[4]), "details": str(r[5])})
    return jsonify({'status': 'ok', 'entries': recs, 'count': len(recs)})

@app.route('/display_fic/', methods=['GET'])
def display_fic():
    res = spcall('display_fic', (), True)

    if 'Error' in str(res[0][0]):
        return jsonify({'status': 'error', 'message': res[0][0]})
    recs = []
    for r in res:
        recs.append({"book_name": str(r[0]), "description":  str(r[1]), "price": str(r[2]), "category": str(r[3]), "photo": str(r[4]), "details": str(r[5])})
    return jsonify({'status': 'ok', 'entries': recs, 'count': len(recs)})

@app.route('/display_nonfic/', methods=['GET'])
def display_nonfic():
    res = spcall('display_nonfic', (), True)

    if 'Error' in str(res[0][0]):
        return jsonify({'status': 'error', 'message': res[0][0]})
    recs = []
    for r in res:
        recs.append({"book_name": str(r[0]), "description": str(r[1]), "price": str(r[2]), "category": str(r[3]), "photo": str(r[4]), "details": str(r[5])})
    return jsonify({'status': 'ok', 'entries': recs, 'count': len(recs)})

@app.route('/display_prof/', methods=['GET'])
def display_prof():
    res = spcall('display_prof', (), True)

    if 'Error' in str(res[0][0]):
        return jsonify({'status': 'error', 'message': res[0][0]})
    recs = []
    for r in res:
        recs.append({"firstname": str(r[0]), "lastname": str(r[1]), "address": str(r[2]), "mobile": str(r[3]), "email": str(r[4]), "weblink": str(r[5])})
    return jsonify({'status': 'ok', 'entries': recs, 'count': len(recs)})

@app.route('/display_acads/', methods=['GET'])
def display_acads():
    res = spcall('display_acads', (), True)

    if 'Error' in str(res[0][0]):
        return jsonify({'status': 'error', 'message': res[0][0]})
    recs = []
    for r in res:
        recs.append({"book_name": str(r[0]), "description": str(r[1]), "price": str(r[2]), "category": str(r[3]), "photo": str(r[4]), "details": str(r[5])})
    return jsonify({'status': 'ok', 'entries': recs, 'count': len(recs)})

@app.route('/display_wish/', methods=['GET'])
def display_wish():
    res = spcall('display_wish', (), True)

    if 'Error' in str(res[0][0]):
        return jsonify({'status': 'error', 'message': res[0][0]})
    recs = []
    for r in res:
        recs.append({"book_name": str(r[0]),  "description": str(r[1]), "price": str(r[2]), "category": str(r[3]), "photo": str(r[4]), "details": str(r[5])})
    return jsonify({'status': 'ok', 'entries': recs, 'count': len(recs)})

@app.route('/displaymodal_one/', methods=['GET'])
def displaymodal_one():
    res = spcall('displaymodal_one', (), True)

    if 'Error' in str(res[0][0]):
        return jsonify({'status': 'error', 'message': res[0][0]})
    recs = []
    for r in res:
        recs.append({"book_name": str(r[0]), "price": str(r[1])})
    return jsonify({'status': 'ok', 'entries': recs, 'count': len(recs)})

@app.route('/wishlist1', methods=['POST'])
def wishlist1():

    res = spcall("wishlist1", ('1'), True)

    return jsonify({'status': 'ok', 'message': res[0][0]})


@app.route('/delete_all', methods=['POST'])
def delete_all():

    res = spcall("delete_all", ('1'), True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete_wish', methods=['POST'])
def delete_wish():

    res = spcall("delete_wish", ('1'), True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete1', methods=['POST'])
def delete1():

    res = spcall("delete1", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete2', methods=['POST'])
def delete2():

    res = spcall("delete2", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete3', methods=['POST'])
def delete3():

    res = spcall("delete3", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete4', methods=['POST'])
def delete4():

    res = spcall("delete4", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete5', methods=['POST'])
def delete5():

    res = spcall("delete5", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete6', methods=['POST'])
def delete6():

    res = spcall("delete6", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete7', methods=['POST'])
def delete7():

    res = spcall("delete7", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete8', methods=['POST'])
def delete8():

    res = spcall("delete8", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete9', methods=['POST'])
def delete9():

    res = spcall("delete9", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})

@app.route('/delete10', methods=['POST'])
def delete10():

    res = spcall("delete10", ('1'),True)

    return jsonify({'status': 'ok', 'message': res[0][0]})





@app.after_request
def add_cors(resp):
    resp.headers['Access-Control-Allow-Origin'] = flask.request.headers.get('Origin', '*')
    resp.headers['Access-Control-Allow-Credentials'] = True
    resp.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS, GET, PUT, DELETE'
    resp.headers['Access-Control-Allow-Headers'] = flask.request.headers.get('Access-Control-Request-Headers','Authorization')
    # set low for debugging

    if app.debug:
        resp.headers["Access-Control-Max-Age"] = '1'
    return resp




if __name__ == '__main__':
    app.run(threaded=True,debug=True)
