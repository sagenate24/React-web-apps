const apiKey = '6NMBsqeTkCh90FmIcY2GrU3qrNYu4Z2agQUDNLbkt5Fpgam6MHmgVgOQLv-DpAmnhkCeTgXrr8xjnrdE46dbskjusbLzkSw5WHb53bsfnHMzo-g69a0I9Q6BUzzUWnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                 Authorization: `Bearer ${apiKey}` 
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    phoneNumber: business.phone,
                    photos: business.photos  
                }));
            }
        });
    }

};

export default Yelp;