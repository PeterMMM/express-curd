import axios from 'axios';

export const dataProvider = {
    getList: async (resource, params) => {
        let response;
        let mappedData;

        if (resource === 'juices') {
          const { page = 1, perPage = 5 } = params.pagination;
          response = await axios.get('http://localhost:3000/admin/juice/list', {
            params: {
              page,
              perPage,
            },
          });
        } else {
          response = [];
        }

        mappedData = response.data.data.map(item => ({
          ...item,
          id: item._id,
        }));

        return {
          data: mappedData,
          total: response.data.total,
        };
    },
    getOne: async (resource, params) => {
        let response;
        let mappedData;

        if (resource === 'juices') {
          response = await axios.get(`http://localhost:3000/admin/juice/${params.id}`);
        } else {
          response = [];
        }

        mappedData = {
          ...response.data.data,
          id: response.data.data._id,
        };

        return {
          data: mappedData,
        };
    },
    create: async (resource, params) => {
        if (resource === 'juices') {
          try {
            const response = await axios.post('http://localhost:3000/admin/juice/create', {
              brand_code: params.data.brand_code,
              brand: params.data.brand,
              description: params.data.description,
            });

            return {
              data: {
                ...response.data,
                id: response.data._id,
              },
            };
          } catch (error) {
            throw new Error('Failed to create juice');
          }
        }
        return [];
    },
    update: async (resource, params) => {
        if (resource === 'juices') {
            try {
              const response = await axios.put(`http://localhost:3000/admin/juice/update/${params.id}`, {
                brand_code: params.data.brand_code,
                brand: params.data.brand,
                description: params.data.description,
              });

              return {
                data: {
                  ...response.data,
                  id: response.data._id,
                },
              };
            } catch (error) {
              throw new Error('Failed to update juice');
            }
        }
        return [];
    },
    delete: async (resource, params) => {
        if (resource === 'juices') {
            try {
              const response = await axios.delete(`http://localhost:3000/admin/juice/delete/${params.id}`);
              return { data: { id: params.id } };
            } catch (error) {
              throw new Error('Failed to delete juice');
            }
        }
        return [];
    },
}
