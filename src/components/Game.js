import React from 'react'
import "../App.css"

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.flags = [
            ["af", "afghanistan"],
            ["za", "afrique du sud"],
            ["al", "albanie"],
            ["dz", "algérie", "algerie"],
            ["de", "allemagne"],
            // ["ad", "andorre"],
            ["ao", "angola"],
            ["aq", "antarctique"],
            ["ag", "antigua"],
            ["sa", "arabie saoudite"],
            ["ar", "argentine"],
            ["am", "arménie", "armenie"],
            ["au", "australie"],
            ["at", "autriche"],
            ["az", "azerbaïdjan", "azerbaidjan"],
            ["bs", "bahamas"],
            ["bh", "bahreïn", "bahrein"],
            ["bd", "bangladesh"],
            ["bb", "barbade"],
            ["by", "biélorussie", "bielorussie"],
            ["be", "belgique"],
            ["bz", "belize"],
            ["bj", "bénin", "benin"],
            ["bm", "bermudes"],
            ["bt", "bhoutan"],
            ["bo", "bolivie"],
            ["ba", "bosnie"],
            ["bw", "botswana"],
            ["br", "brésil", "bresil"],
            ["bn", "brunéi", "brunei"],
            ["bg", "bulgarie"],
            ["bf", "burkina faso"],
            ["bi", "burundi"],
            ["kh", "cambodge"],
            ["cm", "cameroun"],
            ["ca", "canada"],
            ["cv", "cap vert", "cap-vert"],
            ["cf", "république centrafricaine", "republique centrafricaine", "centrafrique"],
            ["cl", "chili"],
            ["cn", "chine"],
            ["cy", "chypre"],
            ["co", "colombie"],
            ["km", "comores"],
            ["cg", "congo", "republique du congo", "république du congo"],
            ["cd", "congo", "republique democratique du congo", "république démocratique du congo"],
            ["kr", "corée du sud", "coree du sud"],
            ["kp", "corée du nord", "coree du nord"],
            ["cr", "costa rica"],
            ["ci", "côte d'ivoire", "cote d'ivoire"],
            ["hr", "croatie"],
            ["cu", "cuba"],
            ["dk", "danemark"],
            ["dj", "djibouti"],
            ["do", "république dominicaine", "republique dominicaine"],
            ["dm", "dominique"],
            ["eg", "égypte", "egypte"],
            ["sv", "salvador", "el salvador"],
            ["ae", "émirats arabes unis", "emirats arabes unis"],
            ["ec", "équateur", "equateur"],
            ["er", "érythrée", "erythrée", "erythree"],
            ["es", "espagne"],
            ["ee", "estonie"],
            ["us", "usa", "états-unis", "etats unis", "etats-unis"],
            ["et", "ethiopie", "éthiopie"],
            ["fj", "fidji"],
            ["fi", "finlande"],
            ["fr", "france"],
            ["ga", "gabon"],
            ["gm", "gambie"],
            ["ge", "géorgie", "georgie"],
            ["gh", "ghana"],
            ["gr", "grèce", "grece"],
            ["gd", "grenade"],
            ["gt", "guatemala"],
            ["gn", "guinée", "guinee"],
            ["gw", "guinée-bissau", "guinee-bissau", "guinée bissau", "guinee bissau"],
            ["gq", "guinée équatoriale", "guinee equatoriale", "guinee équatoriale", "guinée equatoriale"],
            ["gy", "guyana"],
            ["ht", "haïti", "haiti"],
            ["hn", "honduras"],
            ["hk", "hong kong", "hong-kong"],
            ["hu", "hongrie"],
            ["in", "inde"],
            ["id", "indonésie", "indonesie"],
            ["ir", "iran"],
            ["iq", "irak"],
            ["ie", "irlande"],
            ["is", "islande"],
            ["il", "israël", "israel"],
            ["it", "italie"],
            ["jm", "jamaïque", "jamaique"],
            ["jp", "japon"],
            ["jo", "jordanie"],
            ["kz", "kazakhstan"],
            ["ke", "kenya"],
            ["kg", "kirghizistan"],
            ["ki", "kiribati"],
            ["kw", "koweït", "koweit"],
            ["la", "laos"],
            ["ls", "lesotho"],
            ["lv", "lettonie"],
            ["lb", "liban"],
            ["lr", "libéria", "liberia"],
            ["ly", "libye"],
            ["li", "liechtenstein"],
            ["lt", "lituanie"],
            ["lu", "luxembourg"],
            ["mo", "macao"],
            ["mk", "macédoine du nord", "macedoine du nord"],
            ["mg", "madagascar"],
            ["my", "malaisie"],
            ["mw", "malawi"],
            ["mv", "maldives"],
            ["ml", "mali"],
            ["mt", "malte"],
            ["ma", "maroc"],
            ["mh", "îles marshall", "iles marshall", "marshall"],
            ["mu", "maurice", "ile maurice", "île maurice"],
            ["mr", "mauritanie"],
            ["mx", "mexique"],
            ["fm", "micronésie", "micronesie", "etats federes de micronesie", "états fédérés de micronésie"],
            ["md", "moldavie"],
            ["mc", "monaco"],
            ["mn", "mongolie"],
            ["me", "monténégro", "montenegro"],
            ["mz", "mozambique"],
            ["mm", "birmanie"],
            ["na", "namibie"],
            ["nr", "nauru"],
            ["np", "népal", "nepal"],
            ["ni", "nicaragua"],
            ["ne", "niger"],
            ["ng", "nigeria", "nigéria"],
            ["no", "norvège", "norvege"],
            ["nz", "nouvelle-zélande", "nouvelle-zelande", "nouvelle zélande", "nouvelle zelande"],
            ["om", "oman"],
            ["ug", "ouganda"],
            ["uz", "ouzbékistan", "ouzbekistan"],
            ["pk", "pakistan"],
            ["pw", "palaos"],
            ["ps", "palestine"],
            ["pa", "panama"],
            ["pg", "papouasie-nouvelle-guinée", "papouasie nouvelle guinée", "papouasie-nouvelle-guinee", "papouasie nouvelle guinee"],
            ["py", "paraguay"],
            ["nl", "pays-bas", "pays bas"],
            ["pe", "pérou", "perou"],
            ["ph", "philippines"],
            ["pl", "pologne"],
            ["pt", "portugal"],
            ["qa", "qatar"],
            ["ro", "roumanie"],
            ["gb", "royaume-uni", "royaume uni"],
            ["ru", "russie"],
            ["rw", "rwanda"],
            ["eh", "sahara occidental"],
            ["kn", "saint-christophe-et-niévès", "saint-christophe-et-nieves", "saint christophe et niévès", "saint christophe et nieves"],
            ["sm", "saint-marin", "saint marin"],
            ["va", "vatican"],
            ["vc", "saint-vincent-et-les-grenadines", "saint vincent et les grenadines"],
            ["lc", "sainte-lucie", "sainte lucie"],
            ["sb", "salomon"],
            ["ws", "samoa"],
            ["st", "sao tomé-et-principe", "sao tome-et-principe", "sao tomé et principe", "sao tome et principe"],
            ["sn", "sénégal", "senegal", "sénegal", "senégal"],
            ["rs", "serbie"],
            ["sc", "seychelles"],
            ["sl", "sierra leone"],
            ["sg", "singapour"],
            ["sk", "slovaquie"],
            ["si", "slovénie", "slovenie"],
            ["so", "somalie"],
            ["sd", "soudan"],
            ["ss", "soudan du sud"],
            ["lk", "sri lanka"],
            ["se", "suède", "suede"],
            ["ch", "suisse"],
            ["sr", "suriname"],
            ["sz", "eswatini", "swaziland"],
            ["sy", "syrie"],
            ["tj", "tadjikistan"],
            ["tw", "taïwan", "taiwan"],
            ["tz", "tanzanie"],
            ["td", "tchad"],
            ["cz", "tchéquie", "tchequie", "république tchèque", "republique tcheque"],
            ["th", "thaïlande", "thailande"],
            ["tl", "timor oriental"],
            ["tg", "togo"],
            ["to", "tonga"],
            ["tt", "trinité-et-tobago", "trinité et tobago", "trinite-et-tobago", "trinite et tobago"],
            ["tn", "tunisie"],
            ["tm", "turkménistan", "turkmenistan"],
            ["tr", "turquie"],
            ["tv", "tuvalu"],
            ["ua", "ukraine"],
            ["uy", "uruguay"],
            ["vu", "vanuatu"],
            ["ve", "venezuela", "vénézuela", "vénezuela", "venézuela"],
            ["vn", "vietnam", "viet nam", "viêtnam", "viêt nam"],
            ["ye", "yémen", "yemen"],
            ["zm", "zambie"],
            ["zw", "zimbabwe"],
        ]
        this.state = {
            flagNumber: 0,
            score: 0,
            urlFlag: "",
            inputPlayer: "",
            isPlaying: false,
            ended: false,
            order: []
        }
    }

    _start() {
        this.setState({
            flagNumber: 0,
            score: 0,
            urlFlag: "",
            inputPlayer: "",
            isPlaying: false,
            ended: false,
            order: []
        }, () => {
            for (let i = 0; i < this.flags.length; i++) {
                this.state.order.push(i)
            }
            this._shuffleArray(this.state.order);
            this.setState({
                urlFlag: "https://flagcdn.com/" + this.flags[this.state.order[this.state.flagNumber]][0] + ".svg"
            }, () => {
                this.setState({
                    isPlaying: true
                }, () => {
                    document.getElementsByTagName('input')[0].focus();
                });
            })
        })
    }

    _shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    _nextFlag(boolean) {
        if(this.state.flagNumber < this.flags.length - 1) {
            if (boolean) {
                this.setState({
                    flagNumber: this.state.flagNumber + 1,
                    score: this.state.score + 1
                }, () => {
                    this.setState({
                        urlFlag: "https://flagcdn.com/" + this.flags[this.state.order[this.state.flagNumber]][0] + ".svg"
                    })
                });
            } else if (!boolean) {
                document.getElementsByTagName('input')[0].focus();
                this.setState({
                    flagNumber: this.state.flagNumber + 1
                }, () => {
                    this.setState({
                        urlFlag: "https://flagcdn.com/" + this.flags[this.state.order[this.state.flagNumber]][0] + ".svg",
                        inputPlayer: ""
                    })
                });
            }
        } else if (this.state.flagNumber >= this.flags.length - 1) {
            if (boolean) {
                this.setState({
                    flagNumber: this.state.flagNumber + 1,
                    score: this.state.score + 1
                }, () => {
                    this.setState({
                        isPlaying: false,
                        ended: true
                    })
                });
            } else if (!boolean) {
                this.setState({
                    flagNumber: this.state.flagNumber + 1
                }, () => {
                    this.setState({
                        isPlaying: false,
                        ended: true
                    })
                });
            }
        }
        
    }
    
    _inputChanged(event) {
        this.setState({
            inputPlayer: event.target.value
        }, () => {
            if (this.state.inputPlayer.toLowerCase() === this.flags[this.state.order[this.state.flagNumber]][1] || this.state.inputPlayer.toLowerCase() === this.flags[this.state.order[this.state.flagNumber]][2] || this.state.inputPlayer.toLowerCase() === this.flags[this.state.order[this.state.flagNumber]][3] || this.state.inputPlayer.toLowerCase() === this.flags[this.state.order[this.state.flagNumber]][4]) {
                this._nextFlag(true);
                this.setState({
                    inputPlayer: ""
                })
            }
        })
    }


    render() {
        if (this.state.isPlaying) {
            return (
                <div className="App">
                    <img className="flagImage" src={this.state.urlFlag} alt="Drapeau"/>
                    <button className="button" onClick={() => this._nextFlag(false)}>Passer</button>
                    <input className="input" value={this.state.inputPlayer} onChange={event => this._inputChanged(event)}></input>
                    <p className="score"><span className="scoreBold">{this.state.score}</span>/{this.flags.length}</p>
                </div>
            )
        } else if (!this.state.isPlaying && !this.state.ended) {
            return (
                <div className="App">
                    <button className="button" onClick={() => this._start()}>Commencer</button>
                </div>
            )
        } else if (!this.state.isPlaying && this.state.ended) {
            return (
                <div className="App">
                    <p className="title">Terminé !</p>
                    <p className="score"><span className="scoreBold">{this.state.score}</span> drapeau(x) trouvé(s) sur {this.flags.length}</p>
                    <button className="button" onClick={() => this._start()}>Rejouer</button>
                </div>
            )
        }
    }
}

export default Game