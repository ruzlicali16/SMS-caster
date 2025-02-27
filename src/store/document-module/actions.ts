import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { DocumentStateInterface } from './state';
import documentService from 'src/services/document.service';

const actions: ActionTree<DocumentStateInterface, StateInterface> = {
  async addDocument(context, payload: any): Promise<any> {
    const result = await documentService.addDocument(payload);
    context.commit('addDocument', result.data);
    return result;
  },
  async uploadDocument({}, payload): Promise<any> {
    const { id, file } = payload;
    const result = await documentService.upload(id, file);
    console.log(result);
  },
  async getDocuments(context): Promise<any> {
    const result = await documentService.getAll();
    context.commit('getDocuments', result);
  }
};

export default actions;
