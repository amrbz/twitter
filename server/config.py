import os

class Config:
    DEBUG = False
    TESTING = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'sKFNkNHFLL12x3NMru2cHdkKnASLDK21738lkDJsdfnQoenm3912N'
    SSL_DISABLE = True
    PROPAGATE_EXCEPTIONS = False
    IPFS_URL = 'http://ipfs'

    ROOT_WALLET_PRIV_KEY = '4FyYCkTpusaohyGbD3L69qTYMYtQbaWWJqPUmHKvNTDh'
    RETWEET_WALLET_PRIV_KEY = '2f8BYeD4g4J9Dv1figtM6uTVGLF4xHeaD73d5chSRdiF'
    

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = False
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'http://crate:4200'
    ORIGINS=['http://localhost:7600']

class TestingConfig(Config):
    TESTING = True
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'http://crate:4200'
    ORIGINS=['http://localhost:7600']

class ProductionConfig(Config):
    SSL_DISABLE = True
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'http://crate:4200'
    ORIGINS=['http://localhost:7600']



config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
