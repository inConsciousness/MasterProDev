// Initialize Bootstrap tooltips and popovers if needed
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

// Initialize modals
document.addEventListener('DOMContentLoaded', function () {
    var resumeWritingModal = new bootstrap.Modal(document.getElementById('resumeWritingModal'));
    var coverLetterModal = new bootstrap.Modal(document.getElementById('coverLetterModal'));
    var profilesOptimizationModal = new bootstrap.Modal(document.getElementById('profilesOptimizationModal'));
    var freelancingModal = new bootstrap.Modal(document.getElementById('freelancingModal'));
    var portfolioWebpageModal = new bootstrap.Modal(document.getElementById('portfolioWebpageModal'));
    var studyHelpModal = new bootstrap.Modal(document.getElementById('studyHelpModal'));
    var headHunterModal = new bootstrap.Modal(document.getElementById('headHunterModal'));

    // Show modals based on button clicks or other triggers
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            var target = document.querySelector(this.getAttribute('data-bs-target'));
            var modal = new bootstrap.Modal(target);
            modal.show();
        });
    });
});
