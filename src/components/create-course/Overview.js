import React, { useState, useLayoutEffect } from "react";
import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ImageUpload from "./common/ImageUpload";
import { TextInput } from "./common/FormInputs";
//import "./react-quill.css";
import getAllCategories from "./API/getAllCategoriesAPI";
import getSubcategories from "./API/getSubcategoriesAPI";
import { CreateCourseInput } from "../create-course/reactQuill.style";
import { Col, Container, Row } from 'react-bootstrap';

const initState = {
  title: "",
  subtitle: "",
  description: "",
  language: "",
  level: "",
  category: "",
  subcategory: "",
  tags: [],
};

const languages = [
  { id: "ENGLISH", name: "English" },
  { id: "HINDI", name: "Hindi" },
  { id: "TAMIL", name: "Tamil" },
];
const levels = [
  { id: "BEGINNER", name: "Beginner" },
  { id: "INTERMEDIATE", name: "Intermediate" },
  { id: "ADVANCED", name: "Advanced" },
];

function CounterTextInput({
  name,
  placeholder,
  value,
  index,
  maxLen = 60,
  onChange,
}) {
  const remaining = maxLen - value.length;
  const checkLimit = (evt) => {
    const text = evt.currentTarget.value;
    const name = evt.currentTarget.name;
    text.length > maxLen
      ? onChange(text.slice(0, maxLen), name)
      : onChange(text, name);
  };
  return (
    <div className="input-limit">
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={checkLimit}
        data-index={index}
      />
      <div className="controls">
        <span>{remaining}</span>
      </div>
    </div>
  );
}

function ComboInput({ name, label, options, value, placeholder, onChange = () => {} }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <select
        className="form-control"
        style={{paddingTop:0,paddingBottom:0}}
        name={name}
        value={value}
        onChange={onChange}
      >
      {placeholder!=="" &&
        <option value="" disabled selected hidden>{placeholder}</option>
      }
        {options.map((opt, i) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function Overview(props) {
  const [fields, setFields] = useState(initState);
  const [newTag, setNewTag] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [focusReactQuill, setFocusReactQuill] = useState(false);
  useLayoutEffect(() => {
    //If edit course is selected this will prepoluate page with value that comes from server. Otherwise if create course is selected then this will be as initial state

    setFields(
      props.editCourseDetails !== undefined
        ? {
            title: props.editCourseDetails.title,
            subtitle: props.editCourseDetails.subTitle,
            description: props.editCourseDetails.description,
            language: props.editCourseDetails.language,
            level: props.editCourseDetails.level,
            category: props.editCourseDetails.category.id,
            subcategory: props.editCourseDetails.subCategory.id,
            tags: props.editCourseDetails.tags,
          }
        : initState
    );
    // This will fetch category list from server
    async function fetchCategories() {
      const categories = await getAllCategories();
      let copy;
      setCategories(categories); // If we are on edit course, then category of that course will be shown, otherwise if we are on create course then first category in array will be shown
      setFields((fields) => {
        copy = { ...fields };
        copy["category"] =
          window.location.pathname.includes("/edit-course") === false
            ? ""
            : props.editCourseDetails !== undefined
            ? props.editCourseDetails.category.id
            : fields.category;
        return copy;
      });

      // This will fetch subcategories for current Category
      const subCat = await getSubcategories(
        props.editCourseDetails !== undefined
          ? props.editCourseDetails.category.id
          : ""
      );
      setSubCategories(subCat);
      setFields((fields) => {
        let tmp = { ...fields };
        tmp["subcategory"] =
          window.location.pathname.includes("/edit-course") === false
            ? subCat[0]
            : props.editCourseDetails !== undefined
            ? props.editCourseDetails.subCategory.id
            : fields.subcategory;
        return tmp;
      });
    }
    fetchCategories();
  }, [props.editCourseDetails]);

  const handleChangeCategory = async (evt) => {
    const id = evt.currentTarget.value;
    handleUpdateFieldEvt(evt);
    const subCat = await getSubcategories(id);
    setSubCategories(subCat);
    setFields((fields) => {
      const copy = { ...fields };
      copy["subcategory"] = subCat[0];
      return copy;
    });
  };

  const handleChangeSubCategory = (evt) => {
    const id = parseInt(evt.currentTarget.value);
    handleUpdateField(evt);
  };

  const handleUpdateFieldEvt = (evt) => {
    const { name, value } = evt.currentTarget;
    handleUpdateField(value, name);
  };

  const handleUpdateField = (value, name) => {
    setFields((fields) => {
      const copy = { ...fields };
      copy[name] = value;
      return copy;
    });
  };

  const handleChangeDescription = (val) => {
    setFields((fields) => {
      const copy = { ...fields };
      copy.description = val;
      return copy;
    });
  };

  const handleAddTag = () => {
    if (newTag.trim() === "") return;

    setFields((fields) => {
      const copy = { ...fields };
      copy.tags = [...copy.tags, newTag];
      return copy;
    });

    setNewTag("");
  };

  const handleRemoveTag = (val) => {
    setFields((fields) => {
      const copy = { ...fields };
      //copy.tags = copy.tags.filter(t => t !== val);
      copy.tags.splice(copy.tags.indexOf(val), 1); // only first occurrence
      return copy;
    });
  };

  const addUploadedPhoto = (photo) => {
    props.updateCourseImage(photo);
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleAddTag();
    }
  };

  return (
    <CreateCourseInput>
    <div className="course-overview">
      <h5>Course Overview and Details</h5>
      <Row>
      <Col xs={12} sm={12}>
        <CounterTextInput
          name="title"
          placeholder="Course Title"
          value={fields.title}
          onChange={handleUpdateField}
        />
      </Col>

      <Col xs={12} sm={12}>
        <CounterTextInput
          name="subtitle"
          placeholder="Course Subtitle"
          value={fields.subtitle}
          onChange={handleUpdateField}
          maxLen={120}
        />
      </Col>

      <Col xs={12} sm={12}>
        <ReactQuill
          placeholder="Course Description"
          value={fields.description}
          onChange={handleChangeDescription}
          className={focusReactQuill ? "react-quill" : ""}
          onFocus={() => setFocusReactQuill(true)}
          onBlur={() => setFocusReactQuill(false)}
        />
        <input type="hidden" name="description" value={fields.description} />
      </Col>

          <Col xs={12} sm={6}>
            <ComboInput
              name="language"
              label="Language"
              placeholder=""
              options={languages}
              value={fields.language}
              onChange={handleUpdateFieldEvt}
            />
          </Col>
          <Col xs={12} sm={6}>
            <ComboInput
              name="level"
              label="Level"
              placeholder=""
              options={levels}
              value={fields.level}
              onChange={handleUpdateFieldEvt}
            />
          </Col>
          <Col xs={12} sm={6}>
          <ComboInput
            name="category"
            label="Course Category"
            placeholder="Select Category"
            options={categories}
            value={fields.category}
            onChange={handleChangeCategory}
          />
          </Col>
          <Col xs={12} sm={6}>
          <ComboInput
            name="subcategory"
            label="Sub Category"
            placeholder="Select subcategory"
            options={subCategories}
            value={fields.subcategory}
            onChange={handleUpdateFieldEvt}
          />
          </Col>
          <Col xs={12} sm={6} className="addTagDiv">
          <TextInput
            name="addTag"
            label="Primary Topics taught in the course / Tags"
            placeholder="Enter topic here"
            value={newTag}
            onChange={(e) => setNewTag(e.currentTarget.value)}
            onKeyUp={handlePressEnter}
            disableTag={props.editCourseDetails !== undefined ? true : false}
          />
          </Col>
          <Col xs={12} sm={6}>
          <button className="btn btn-addTag" onClick={handleAddTag}>Add</button>
         </Col>
      </Row>

      <div className="p">
        {fields.tags?.map((t, i) => (
          <div key={`${t}${i}`} className="tag">
            <span>{t}</span>
            <small onClick={(e) => handleRemoveTag(t)}>
              <FontAwesomeIcon icon={faTimes} />
            </small>
            <input type="hidden" name={`tag[${i}]`} value={t} />
          </div>
        ))}
      </div>

      <Row>
        <Col xs={12} sm={6}>
            <label>Course Image</label>
            <ImageUpload
              addUploadedPhoto={addUploadedPhoto}
              courseImage={props.courseImage}
              editCourseDetails={props.editCourseDetails}
            />
          </Col>
          <Col xs={12} sm={6}>
            <div className="image-message">
              <input type="hidden" name="courseImage" value={props.courseImage} />
              <span>
                Upload a course image, the image must not be bigger than 1MB in size
                and it should be in one of the following formats .jpg .png .gif
              </span>
            </div>
          </Col>
      </Row>
    </div>
    </CreateCourseInput>
  );
}

export default Overview;
