import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Teste"
		};

		res.render("index/index", opcoes);
	}

	public async produtos(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Catalogo"
		};

		res.render("index/produtos", opcoes);
	}

	public async sobre(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Sobre"
		};

		res.render("index/sobre", opcoes);
	}
	public async camisa(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Camisa"
		};

		res.render("index/camisa", opcoes);
	}
	public async blusa(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Blusa"
		};

		res.render("index/blusa", opcoes);
	}

}

export = IndexRoute;
