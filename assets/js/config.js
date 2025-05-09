const project_name = `Workshop on 3D Gaussian Splatting for Robotic Manipulation`
const proj_small_caps = `<span class="small-caps">3DGS-RMW</span>: `
const conference_details = ['', '', '', '']
const workshop_date = ``

const talk_speaker_details = {
  'xw': ['Xiaolong Wang', './assets/images/talks/xiaolong_wang.jpg', 'Assistant Professor', 'UC San Diego', 'https://xiaolonw.github.io/', '', ''],
  'yl': ['Yunzhu Li', './assets/images/talks/yunzhu_li.jpg', 'Assistant Professor', 'Columbia University', 'https://yunzhuli.github.io/', '', ''],
  'kg': ['Ken Goldberg', './assets/images/talks/ken_goldberg.jpg', 'Full Professor', 'UC Berkley', 'https://goldberg.berkeley.edu/', '', ''],
  'mc': ['Mac Schwager', './assets/images/talks/mac_schwager.jpg', 'Associate Professor', 'Stanford University', 'https://web.stanford.edu/~schwager/', '', ''],
  'eg': ['Efstratios Gavves', './assets/images/talks/efstratios_gavves.jpg', 'Associate Professor', 'University of Amsterdam', 'https://www.egavves.com/', '', ''],
  'dk': ['Danica Kragic', './assets/images/talks/danica_kragic.png', 'Full Professor', 'Royal Institute of Technology (KTH)', 'https://www.csc.kth.se/~danik/', '', ''],
}

const organizers_details = [
  ['Federico Ceola', 'assets/images/organizers/federico_ceola.jpg', 'Postdoc', 'Istituto Italiano di Tecnologia', 'https://scholar.google.com/citations?hl=it&user=jl8BW1kAAAAJ'],
  ['Federico Vasile', 'assets/images/organizers/federico_vasile.jpg', 'Postdoc', 'Istituto Italiano di Tecnologia', 'https://federicovasile1.github.io/website/'],
  ['Lorenzo Natale', 'assets/images/organizers/lorenzo_natale.jpeg', 'Tenured Senior Researcher', 'Istituto Italiano di Tecnologia', 'https://lornat75.github.io/'],
]

const accepted_presentations = [
  ['', '', '', '', '', '', '', '', ''],
]

const org_affiliation_logos = [
  '',
]



// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '08:45 - 09:00', 'Introduction'],
  ['inv-talk', '09:00 - 09:30', 'Invited Talk', 'dh', 'in-person'],
  ['spot-ppt', '09:30 - 10:30', 'Spotlight Presentations'],
  ['coffee-break', '10:30 - 11:30', '<span class="bold has-text-info">Spotlight Posters (Muse 1)</span> & Coffee Break'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk', 'cp', 'online'],
  ['inv-talk', '12:00 - 12:30', 'Invited Talk',  'gc', 'in-person'],
  ['lunch-break', '12:30 - 14:00', 'Lunch Break'],
  ['inv-talk', '14:00 - 14:30', 'Invited Talk', 'pf', 'online'],
  ['spot-ppt', '14:30 - 15:30', 'Spotlight presentations'],
  ['coffee-break', '15:30 - 16:00', 'Coffee Break'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'ss', 'in-person'],
  ['inv-talk', '16:30 - 17:00', 'Invited Talk', 'cj', 'in-person'],
  ['disc', '17:00 - 17:05', 'Conclusion'], 
]
