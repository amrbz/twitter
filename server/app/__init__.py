from flask import Flask, g
from config import config
from flask_cors import CORS, cross_origin


def create_app(config_name):
    app = Flask(__name__)

    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    CORS(app, supports_credentials=True, origins=app.config.get('ORIGINS'))

    @app.before_request
    def before_request():
        g.secret_key = app.config.get('SECRET_KEY')
        g.root_wallet_priv_key = app.config.get('ROOT_WALLET_PRIV_KEY')
        g.retweet_wallet_priv_key = app.config.get('RETWEET_WALLET_PRIV_KEY')
        g.db = app.config.get('DATABASE_URL')
        g.ipfs = app.config.get('IPFS_URL')

    if not app.debug and not app.testing and not app.config['SSL_DISABLE']:
        from flask_sslify import SSLify
        ssslify = SSLify(app)

    from main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .api_v1_0 import api as api_v1_0_blueprint
    app.register_blueprint(api_v1_0_blueprint, url_prefix='/api/v1.0')

    return app
