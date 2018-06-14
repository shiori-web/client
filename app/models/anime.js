import DS from 'ember-data';

export default DS.Model.extend({
  titles: DS.attr(),
  title: DS.attr('string'),
  desc: DS.attr('string'),
  slug: DS.attr('string'),
  coverUrl: DS.attr('string'),
  smallCoverUrl: DS.attr('string'),
  startedAt: DS.attr('date'),
  endedAt: DS.attr('date'),
  status: DS.attr('string'),
  season: DS.attr('string'),
  year: DS.attr('number')
});
