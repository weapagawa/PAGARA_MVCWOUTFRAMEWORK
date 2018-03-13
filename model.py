from sqlalchemy import create_engine
import os


class DBconn:
    def __init__(self):
        engine = create_engine("postgresql://postgres:pagararea1096@127.0.0.1:5432/bookyourbook", echo=False)
        self.conn = engine.connect()
        self.trans = self.conn.begin()

    def getcursor(self):
        cursor = self.conn.connection.cursor()
        return cursor

    def dbcommit(self):
        self.trans.commit()