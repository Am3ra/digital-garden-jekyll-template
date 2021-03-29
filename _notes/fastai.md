part of my studying of [[deep learning]].

- [Lesson 3 Production and Deployment](#lesson-3-production-and-deployment)
	- [Deployment](#deployment)
		- [Deploy to mobile](#deploy-to-mobile)
		- [How to deploy:](#how-to-deploy)

TODO: 
- [ ] Create simple end-to-end app

## Lesson 3 Production and Deployment

DataBlocks go before a dataloaders? 

```python
bear = bears.new(item_tfms=Resize(128), batch_tfms=aug_transforms(mult=2))
dls = bears.dataloaders(path)
dls.train.show_batch(max_n=8, nrows=2, unique=True)
```

So create a datablock, then create a dataloaders with it? Then you can train the loaded data? I geuss.

It's much easier to clean data *after* you train your model. This allows you to quickly find *least confident* elements and remove or move them.
FastAI does this with the ImageClassifierCleaner, which takes a learner as an argument.

### Deployment

Trained models  can be exported to a `.pkl`, which is basically all the information of the model.
This `.pkl` file can later be imported, and used to predict.

You can serve your Jupyter notebooks online! you can use Voila to build it, and Binder to run it. 

#### Deploy to mobile

Deploy to server, and serve on mobile, it's easier.

#### How to deploy:

1. Manual Process
	1. Run model in parallel with normal systems
	2. Humans check every prediction
2. Limited scope deployment
	3. careful human supervision
	4. Time and/or geography limited
3. Gradual Expansion
	5. Good reporting systems needed
	6. Consider what could go wrong 

Beware feedback loops -> especially with models whose predictions affect their future inputs.