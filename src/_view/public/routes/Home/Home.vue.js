let testBlob = require('../../../../_data/testBlob')
import {
  MglAttributionControl,
  MglFullscreenControl,
  MglGeolocateControl,
  MglMap,
  MglMarker,
  MglNavigationControl,
  MglScaleControl,
  MglPopup
} from 'vue-mapbox';

export default {
  name: 'home',
  props: [],
  data: function () {
    return {
      featuresList: [...testBlob.features],
      accessToken: 'pk.eyJ1IjoibnNpcmFtc2V0dHkiLCJhIjoiY2sxeXF2ZmZjMHE5ZDNubXQwOWNiOXUxaCJ9.JrWqpd_aK4Ej-xFTygFohg', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      zoom: 15,
      filters: {
        Type : '',
        State : '',
        Suburb : '',
        Stage : '',
        Category: '',
        SubCategory : '',
        Council : '',
        Status : '',
        Ownership : ''
      }
    };
  },
  created: function () {
  },
  methods: {
    getListOfDropDownItems : function(key){
      return [...new Set(this.featuresList.map(item => item.properties.project[key]))];
    },
    resetFilters : function(){
      this.$set(this,'filters',{
        Type : '',
        State : '',
        Suburb : '',
        Stage : '',
        Category: '',
        SubCategory : '',
        Council : '',
        Status : '',
        Ownership : ''
      })
    }
  },
  computed: {
    center: function () {
      return this.filteredFeatures[0] ? this.filteredFeatures[0].geometry.coordinates : this.featuresList[0].geometry.coordinates
    },
    filteredFeatures: function () {
      let filteredFeatures = this.featuresList.filter((feature)=>{
        return (
          (!this.filters.Category || feature.properties.project.Category === this.filters.Category)
          && (!this.filters.Type || feature.properties.project.Type === this.filters.Type)
          && (!this.filters.State || feature.properties.project.State === this.filters.State)
          && (!this.filters.Suburb || feature.properties.project.Suburb === this.filters.Suburb)
          && (!this.filters.Stage || feature.properties.project.Stage === this.filters.Stage)
          && (!this.filters.SubCategory || feature.properties.project.SubCategory === this.filters.SubCategory)
          && (!this.filters.Council || feature.properties.project.Council === this.filters.Council)
          && (!this.filters.Status || feature.properties.project.Status === this.filters.Status)
          && (!this.filters.Ownership || feature.properties.project.Ownership === this.filters.Ownership)
        );
      });
      console.log(filteredFeatures.length);
      return filteredFeatures;
    }
  },
  components: {
    MglMap,
    MglMarker,
    MglNavigationControl,
    MglGeolocateControl,
    MglAttributionControl,
    MglScaleControl,
    MglFullscreenControl,
    MglPopup
  }
}
