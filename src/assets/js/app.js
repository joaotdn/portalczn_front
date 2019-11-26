import $ from 'jquery';
import 'what-input';
import './lib/foundation-explicit-pieces';
import './lib/offcanvas';
import './lib/menuScroll';
import './lib/dataBg';
import './lib/cycle';
import './lib/cycle.swipe';
import './lib/cycle-settings';
import './lib/frameRadio';
import './lib/fontSize';
import './lib/videoOptions';
import './lib/quotations';
import './lib/openWheather';
import './lib/showVideoOnModal';
import './lib/updateModalEvent';
import './lib/loteriaCaixa';
import loteriaCaixa from "./lib/loteriaCaixa";

loteriaCaixa();

window.jQuery = $;
$(document).foundation();