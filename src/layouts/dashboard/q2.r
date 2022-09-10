library(tidyverse)
library(rpart)

evaluate_decision_tree <- function(p = 0.7) {
  # don't remove these lines
  set.seed(123)
  data_set <- read.csv("./data/SAheart.csv")
  train_ids <- sample(nrow(data_set), size = p * nrow(data_set))
  # write your solution here (remember to return the right object)
  
  # a data frame with observations used to train the model
    train_set <- data_set[train_ids, ]
    
    # a decision tree model fitted to the train dataset
    model <- rpart(chd ~ ., data = train_set)

    # model accuracy
    accuracy <- mean(predict(model, newdata = train_set) == train_set$chd)

    # model recall
    recall <- mean(predict(model, newdata = train_set) == 1 & train_set$chd == 1) / mean(train_set$chd == 1)

    # model precision
    precision <- mean(predict(model, newdata = train_set) == 1 & train_set$chd == 1) / mean(predict(model, newdata = train_set) == 1)

    train_ids <- list(train_set = train_set, model = model, accuracy = accuracy, recall = recall, precision = precision)
  
  
  return(train_ids)
}