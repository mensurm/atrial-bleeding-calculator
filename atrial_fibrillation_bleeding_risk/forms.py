from wtforms import Form, FloatField, validators
from math import log


class PrimaryForm(Form):
    total_cholesterol = FloatField(validators=[validators.required])
    triglyceride = FloatField(validators=[validators.required])
    high_density_lipoproteins = FloatField(validators=[validators.required])

    def round(self, number):
        return round(number, 2)

    @property
    def tc(self):
        return float(self.total_cholesterol.data)

    @property
    def tg(self):
        return float(self.triglyceride.data)

    @property
    def hdl(self):
        return self.round(float(self.high_density_lipoproteins.data))

    @property
    def vldl(self):
        return self.round(self.tg / 2.2)

    @property
    def ldl(self):
        return self.round(self.tc - self.hdl - self.vldl)

    @property
    def ai(self):
        return self.round(self.ldl / self.hdl)

    @property
    def aip(self):
        return self.round(log((self.tg / self.hdl)))

    @property
    def cri_i(self):
        return self.round(self.tc / self.hdl)

    @property
    def cri_ii(self):
        return self.round(self.ldl / self.hdl)

    @property
    def ac(self):
        return self.round((self.tc - self.hdl) / self.hdl)

    @property
    def chol_index(self):
        return self.round(self.ldl - self.hdl)

