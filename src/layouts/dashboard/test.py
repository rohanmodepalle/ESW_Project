import numpy as np
#Rotate 2d numpy array

def transform(arr,shift):
    newdict = {}
    rot = np.copy(arr)
    newdict['rotated'] = np.rot90(rot, 1)
    flip = np.copy(arr)
    newdict['flipped'] = np.flipud(flip)
    
    rot = np.copy(arr)
    newdict['rolled'] = np.roll(rot, shift, axis=1)
    np.random.seed(0)
    noise = np.random.normal(0,0.05, arr.shape)
    noised = arr + noise
    newdict['noised'] = noised
    
    return newdict        
