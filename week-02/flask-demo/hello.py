from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
	return "Hello World!"

@app.route('/api/')
@app.route('/api/<filename>/')
def api(filename=None):
    if filename:
        # import pandas as pd
        # df = pd.read_csv(filename)
        # return df.to_dict()
        d = {'a': 1, 'b': 2, 'c': filename}
        return d
    else:
        # make a database query
        # import SQLAlchemy as sa
        d = {'a': 2, 'b': 3}
        return(d, 200, {'header-a': 'b'})

if __name__ == '__main__':
    app.run(dev=False)
