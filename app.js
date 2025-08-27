
async function loadJobs(){
  try{
    const res = await fetch('jobs.json');
    const data = await res.json();
    window.__JOBS__ = data;
    renderJobs(data);
  }catch(e){
    console.error('Failed to load jobs', e);
  }
}

function renderJobs(jobs){
  const list = document.getElementById('job-list');
  if(!list) return;
  list.innerHTML = '';
  if(!jobs.length){
    list.innerHTML = '<p>No jobs found. Try adjusting filters.</p>';
    return;
  }
  jobs.forEach(j => {
    const el = document.createElement('div');
    el.className = 'job-card';
    el.innerHTML = `
      <div class="inline" style="align-items:center;justify-content:space-between">
        <strong>${j.title}</strong>
        <span class="badge ${j.type==='Remote'?'remote':''}">${j.type}</span>
      </div>
      <div class="meta">
        <span>🏢 ${j.company}</span>
        <span>📍 ${j.location}</span>
        <span>💰 ${j.salary || 'Negotiable'}</span>
        ${j.level==='Graduate'?'<span class="badge grad">Graduate</span>':''}
      </div>
      <p>${j.summary}</p>
      <div class="actions">
        <a class="btn" href="${j.apply_url}" target="_blank" rel="noopener">Apply Now</a>
      </div>
    `;
    list.appendChild(el);
  });
}

function applyFilters(){
  const q = (document.getElementById('q')?.value || '').toLowerCase();
  const type = document.getElementById('type')?.value || '';
  const level = document.getElementById('level')?.value || '';
  const loc = (document.getElementById('location')?.value || '').toLowerCase();
  const jobs = (window.__JOBS__ || []).filter(j => {
    const matchQ = !q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.summary.toLowerCase().includes(q);
    const matchType = !type || j.type === type;
    const matchLevel = !level || j.level === level;
    const matchLoc = !loc || j.location.toLowerCase().includes(loc);
    return matchQ && matchType && matchLevel && matchLoc;
  });
  renderJobs(jobs);
}

document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('job-list')){
    loadJobs();
    ['q','type','level','location'].forEach(id => {
      const el = document.getElementById(id);
      if(el) el.addEventListener('input', applyFilters);
      if(el && el.tagName === 'SELECT') el.addEventListener('change', applyFilters);
    });
  }
});
