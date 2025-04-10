$(document).ready(function(){
  $(".Campus_slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // 3 seconds
    autoplayHoverPause: true, // Pause on hover
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });

  $(".alumni_stories").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 4000, // 4 seconds
    autoplayHoverPause: true, // Pause on hover
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 }
    }
  });
  $(".logo-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 5 }
    }
  });
});

  document.addEventListener('DOMContentLoaded', function () {
    const locationData = {
      "Cameroon": {
        "Centre": ["Yaoundé", "Mbalmayo"],
        "Littoral": ["Douala", "Nkongsamba"],
        "North West": ["Bamenda", "Kumbo"]
      },
      "Tanzania": {
        "Dar es Salaam": ["Ilala", "Kinondoni"],
        "Arusha": ["Arusha City", "Meru"],
        "Dodoma": ["Dodoma City", "Bahi"]
      },
      "Ivory Coast": {
        "Abidjan": ["Cocody", "Treichville"],
        "Bouaké": ["Katiola", "Sakassou"],
        "Yamoussoukro": ["Attiegouakro", "Yamoussoukro City"]
      }
    };

    // Desktop Form Elements
    const nationalitySelect = document.getElementById('nationality');
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');

    // Mobile Form Elements
    const regNationality = document.getElementById('regnationality');
    const regState = document.getElementById('regstate');
    const regCity = document.getElementById('regcity');

    // Function to update state options
    function updateStates(country, stateDropdown, cityDropdown) {
      const states = Object.keys(locationData[country] || {});
      stateDropdown.innerHTML = '<option value="">Select State *</option>';
      cityDropdown.innerHTML = '<option value="">Select City *</option>';
      states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
      });
    }

    // Function to update city options
    function updateCities(country, state, cityDropdown) {
      const cities = locationData[country]?.[state] || [];
      cityDropdown.innerHTML = '<option value="">Select City *</option>';
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
      });
    }

    // Desktop Event Listeners
    nationalitySelect?.addEventListener('change', function () {
      updateStates(this.value, stateSelect, citySelect);
    });

    stateSelect?.addEventListener('change', function () {
      updateCities(nationalitySelect.value, this.value, citySelect);
    });

    // Mobile Event Listeners
    regNationality?.addEventListener('change', function () {
      updateStates(this.value, regState, regCity);
    });

    regState?.addEventListener('change', function () {
      updateCities(regNationality.value, this.value, regCity);
    });
  });
