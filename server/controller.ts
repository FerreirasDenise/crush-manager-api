
import model from './model';

class Controller{

    constructor() { }

    getCrushes() {
        return model.find({});
    }

    select(req, res){
        this.getCrushes()
        .then(crushes => res.status(200).json({'result': crushes}))
        .catch(err => res.status(400).json({'result': err}));
    }

    getCrushesById(id){
        return model.find(id);
    }

    selectOne(req, res){
        const id = { _id: req.params.id}

        this.getCrushesById(id)
        .then(crushes => res.status(200).json({'result': crushes}))
        .catch(err => res.status(400).json({'result': err}));
    }

    deleteCrushesById(id){
        return model.deleteOne(id);
    }

    delete(req, res){
        const id = { _id: req.params.id}
        
        this.deleteCrushesById(id)
        .then(crushes => res.status(200).json({'result': crushes}))
        .catch(err => res.status(400).json({'result': err}));
    }

    updateCrush(id, data){
        return model.findOneAndUpdate(id, data);
    }

    update(req, res){
        const id = { _id: req.params.id}
        const crush = req.body;
        
        this.updateCrush(id, crush)
        .then(crushes => res.status(200).json({'result': crushes}))
        .catch(err => res.status(400).json({'result': err}));
    }

    createCrush(data){
        return model.create(data);
    }

    insert(req, res){
        const crush = req.body;
        
        this.createCrush(crush)
        .then(crushes => res.status(200).json({'result': crushes}))
        .catch(err => res.status(400).json({'result': err}));
    }


}

export default Controller;