inport tabs from './modules/tabs';
inport modal from './modules/modal';
inport timer from './modules/timer';
inport cards from './modules/cards';
inport calc from './modules/calc';
inport forms from './modules/forms';
inport slider from './modules/slider';
inport {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    
    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer();
    cards();
    calc();
    forms('form', modalTimerId);
    slider();
});
