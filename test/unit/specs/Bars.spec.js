import Vue from 'Vue';
import Bars from '../../../src/_view/public/routes/Home/Home.vue.js';
describe('Optus Bars - UI Test', () => {
  it('Created the Component', () => {
    expect(typeof Bars.created).toBe('function');
  });

  it('Initialized Default Data', () => {
    expect(typeof Bars.data).toBe('function');
    const defaultData = Bars.data();
    expect(defaultData.controllers.selectedBar).toBe(0);
  });
});
