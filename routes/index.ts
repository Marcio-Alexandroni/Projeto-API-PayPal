import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Teste"
		};

		res.render("index/index", opcoes);
	}

	public async sobre(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Sobre"
		};

		res.render("index/sobre", opcoes);
	}
}

export = IndexRoute;
